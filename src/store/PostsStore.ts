import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Post } from '../app/page';
class PostsStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts() {
    this.loading = true;
    try {
      const response = await axios.get('http://localhost:3000/api/getposts');
      this.posts = response.data;
      this.loading = false;
    } catch (err) {
      this.error = 'Ошибка загрузки постов';
      this.loading = false;
    }
  }

  async addPost(post: Post) {
    try {
      const response = await axios.post('/api/posts', post);
      this.posts.push(response.data); // Добавляем новый пост
    } catch (err) {
      console.error('Ошибка при добавлении поста');
    }
  }

  async updatePost(postId: number, updatedPost: Post) {
    try {
      const response = await axios.put(`/api/posts/${postId}`, updatedPost);
      const index = this.posts.findIndex(p => p.id === postId);
      if (index !== -1) {
        this.posts[index] = response.data; // Обновляем пост
      }
    } catch (err) {
      console.error('Ошибка при обновлении поста');
    }
  }

  async deletePost(postId: number) {
    try {
      await axios.delete(`/api/posts/${postId}`);
      this.posts = this.posts.filter(post => post.id !== postId); // Удаляем пост
    } catch (err) {
      console.error('Ошибка при удалении поста');
    }
  }
}

const postsStore = new PostsStore();
export default postsStore;
