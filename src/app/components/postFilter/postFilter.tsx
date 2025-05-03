'use client';
import React, { useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import postsStore from 'imp/store/PostsStore';
import { Post } from 'imp/utils/interfaces';

const PostFilter: React.FC = observer(() => {
    type SortCriteria = 'id' | 'title' | 'author' | 'date' | 'content';
    const [criteria, setCriteria] = useState<SortCriteria>('id');

    const sortedPosts = useMemo(() => {
      const posts: Post[] = [...postsStore.posts];
      switch (criteria) {
      case 'id':
        return posts.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
      case 'title':
        return posts.sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''));
      case 'author':
        return posts.sort((a, b) => (a.author ?? '').localeCompare(b.author ?? ''));
      case 'date':
        return posts.sort((a, b) => {
          const ad = a.date ? new Date(a.date).getTime() : 0;
          const bd = b.date ? new Date(b.date).getTime() : 0;
          return bd - ad;
        });
      case 'content':
        return posts.sort((a, b) => (a.content ?? '').localeCompare(b.content ?? ''));
      default:
        return posts;
      }
    }, [criteria, postsStore.posts]);

    return (
      <div className="p-4">
        <label htmlFor="filter" className="block mb-2 font-medium">
                Сортировать по:
        </label>
        <select
          id="filter"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value as SortCriteria)}
          className="border rounded p-2"
        >
          <option value="id">ID (по убыванию)</option>
          <option value="title">Title (по возрастанию)</option>
          <option value="author">Author (по возрастанию)</option>
          <option value="date">Date (по убыванию)</option>
          <option value="content">Content (по возрастанию)</option>
        </select>
        <ul className="mt-4 space-y-2">
          {sortedPosts.map((post) => (
            <li key={post.id}>
              <div className="font-bold">{post.title}</div>
              <div className="text-sm text-gray-500">
                {post.author} — {post.date ? new Date(post.date).toLocaleDateString() : ''}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
});

export default PostFilter;
