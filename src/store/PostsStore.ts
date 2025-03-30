
import { makeAutoObservable, runInAction } from 'mobx';
import { Post } from '../utils/interfaces';
import { outerApi } from 'imp/utils/constants/endpoints';
import { updatableData } from 'imp/app/components/blog/postCard';
import api from 'imp/utils/axios/axios';
class PostsStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  fetchPosts = async (keyword?: string) => {
    if (this.loading) return;
    this.loading = true;
    try {

      const response = await api.get<Post[]>(`${outerApi}/posts/getposts${keyword ? `?keyword=${keyword}` : ''}`);
      runInAction(() => {
        this.posts = response.data;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = 'Ошибка загрузки постов';
        this.loading = false;
      });
      console.error('Ошибка при загрузке постов!', err);

    }
  };

  postPicImgSave = async (formData: FormData): Promise<{ url: string; filename: string; }> => {
    try {
      const response = await api.post<{ url: string; filename: string; }>(`${outerApi}/posts/postPicImgSave`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return { url: response.data.url, filename: response.data.filename };
    } catch (err) {
      console.error('Ошибка при добавлении поста', err);
      return { url: 'error', filename: 'error' };
    }
  };

  // eslint-disable-next-line consistent-return
  postPicImgDelete = async (filename: string) => {
    try {
      await api.delete(`${outerApi}/posts/postPicImgDelete/${filename}`);
    } catch (err) {
      return console.error('Ошибка при удалении фотографии из хранилища MinIO', err);
    }
  };

  addPost = async (post: Post): Promise<number> => {
    try {
      const response = await api.post<Post>(`${outerApi}/posts/addpost`, post, { withCredentials: true });
      runInAction(() => {
        this.posts.push(response.data);
      });
      return response.data.id!; // Добавляем новый пост
    } catch (err) {
      console.error('Ошибка при добавлении поста', err);
      return -1;
    }
  };

  updatePost = async (id: number, updatedPost: updatableData) => {
    try {
      const response = await api.put<updatableData>(`${outerApi}/posts/updatepost/${id}`, updatedPost);
      const index = this.posts.findIndex(post => post.id === id);

      if (index !== -1) {
        this.posts[index].title = response.data.title; // Обновляем пост
        this.posts[index].content = response.data.content;
      }
    } catch (err) {
      console.error('Ошибка при обновлении поста', err);
    }
  };

  deletePost = async (postId: number) => {
    try {
      await api.delete(`${outerApi}/posts/deletepost/${postId}`, { withCredentials: true });
      runInAction(() => {
        this.posts = this.posts.filter(post => post.id !== postId); // Удаляем пост
      });
    } catch (err) {
      console.error('Ошибка при удалении поста', err);
    }
  };

  findPostById = (id: number) => {
    const post = this.posts.find(post => post.id === id);
    return post;
  };
}

const postsStore = new PostsStore();
export default postsStore;
