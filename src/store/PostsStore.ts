import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Post } from '../app/page';
import { innerApi } from 'imp/utils/constants/endpoints';
class PostsStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts(keyword?: string) {
    this.loading = true;
    try {

      const response = await axios.get(`${innerApi}/posts/getposts${keyword ? `?keyword=${keyword}` : ''}`);
      this.posts = response.data;
      this.loading = false;
    } catch (err) {
      this.error = 'Ошибка загрузки постов';
      this.loading = false;
    }
  }

  async postPicImgSave(formData: FormData) {
    try {
      const response = await axios.post(`${innerApi}/posts/postPicImgSave`, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.url;
    } catch (err) {
      console.error('Ошибка при добавлении поста');
      return undefined;
    }
  }

  async addPost(post: Post) {
    try {
      const response = await axios.post(`${innerApi}/posts/addPost`, post);
      console.log('ЭТА ВЕРТАЛЕТ', response.data);
      this.posts.push(response.data);
      return response.data.id; // Добавляем новый пост
    } catch (err) {
      console.error('Ошибка при добавлении поста', err);
      return null;
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
      await axios.delete(`${innerApi}/posts/deletepost/${postId}`);
      this.posts = this.posts.filter(post => post.id !== postId); // Удаляем пост
    } catch (err) {
      console.error('Ошибка при удалении поста');
    }
  }
}

const postsStore = new PostsStore();
export default postsStore;
