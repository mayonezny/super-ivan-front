import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { Post } from '../app/page';
import { innerApi } from 'imp/utils/constants/endpoints';
class PostsStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchPosts(keyword?: string) {
    if (this.loading) return;
    this.loading = true;
    try {

      const response = await axios.get(`${innerApi}/posts/getposts${keyword ? `?keyword=${keyword}` : ''}`);
      runInAction(() => {
        this.posts = response.data;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = 'Ошибка загрузки постов';
        this.loading = false;
      });

    }
  }

  async postPicImgSave(formData: FormData) {
    try {
      const response = await axios.post(`${innerApi}/posts/postPicImgSave`, formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        },
      });
      return { url: response.data.url, filename: response.data.filename};
    } catch (err) {
      console.error('Ошибка при добавлении поста');
      return undefined;
    }
  }

  async postPicImgDelete(filename:string){
    try {
      const response = await axios.delete(`${innerApi}/posts/postPicImgDelete/${filename}`);
      return { message: 'Фотография удалена!'};
    } catch (err) {
      return console.error('Ошибка при удалении фотографии из хранилища MinIO', err);
    }
  }

  async addPost(post: Post) {
    try {
      const response = await axios.post(`${innerApi}/posts/addPost`, post);
      runInAction(() => {
        this.posts.push(response.data);
      });
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
      runInAction(() => {
        this.posts = this.posts.filter(post => post.id !== postId); // Удаляем пост
      });
    } catch (err) {
      console.error('Ошибка при удалении поста');
    }
  }

  findPostById(id: number){
    const post = this.posts.find(post => post.id === id);
    return post ? post : console.warn('Пост не найден');
  }
}

const postsStore = new PostsStore();
export default postsStore;
