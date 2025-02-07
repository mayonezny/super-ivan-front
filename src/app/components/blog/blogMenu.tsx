'use client';
import { observer } from 'mobx-react';
import Card from './blogCard';
import postsStore from 'imp/store/PostsStore';
import { useEffect } from 'react';

const BlogMenu = observer(() => {
  useEffect(() => {
    postsStore.fetchPosts(); // При монтировании сразу фетчим посты
  }, []);
  return (
    <div className="grid grid-cols-3 gap-10 px-5 p-2 text-xl justify-items-center">
      {postsStore.posts.map((post) => (
        <Card key={post.id} href={post.href} pic={post.pic} title={post.title} author={post.author} date={post.date}/>
      ))}
    </div>
  );
});

export default BlogMenu;
