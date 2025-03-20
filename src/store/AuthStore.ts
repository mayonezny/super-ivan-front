// /* eslint-disable no-magic-numbers */
// import { makeAutoObservable, runInAction } from 'mobx';
// import axios from 'axios';
// import { Post } from '../app/page';
// import { innerApi } from 'imp/utils/constants/endpoints';
// import { updatableData } from 'imp/app/components/blog/postCard';
// class AuthStore {
//   isAuth: boolean = false;
//   loading: boolean = false;
//   error: string | null = null;
//   userData: object = {};

//   constructor() {
//     makeAutoObservable(this, {}, { autoBind: true });
//   }

//   async fetchPosts(keyword?: string) {
//     if (this.loading) return;
//     this.loading = true;
//     try {

//       const response = await axios.get<Post[]>(`${innerApi}/posts/getposts${keyword ? `?keyword=${keyword}` : ''}`);
//       runInAction(() => {
//         this.posts = response.data;
//         this.loading = false;
//       });
//     } catch (err) {
//       runInAction(() => {
//         this.error = 'Ошибка загрузки постов';
//         this.loading = false;
//       });
//       console.error('Ошибка при загрузке постов!', err);

//     }
//   }

//   async postPicImgSave(formData: FormData): Promise<{ url: string; filename: string; }> {
//     try {
//       const response = await axios.post<{ url: string; filename: string; }>(`${innerApi}/posts/postPicImgSave`, formData, {
//         headers:{
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return { url: response.data.url, filename: response.data.filename};
//     } catch (err) {
//       console.error('Ошибка при добавлении поста', err);
//       return { url: 'error', filename: 'error' };
//     }
//   }

//   // eslint-disable-next-line consistent-return
//   async postPicImgDelete(filename:string){
//     try {
//       await axios.delete(`${innerApi}/posts/postPicImgDelete/${filename}`);
//     } catch (err) {
//       return console.error('Ошибка при удалении фотографии из хранилища MinIO', err);
//     }
//   }

//   async addPost(post: Post): Promise<number> {
//     try {
//       const response = await axios.post<Post>(`${innerApi}/posts/addpost`, post);
//       runInAction(() => {
//         this.posts.push(response.data);
//       });
//       return response.data.id!; // Добавляем новый пост
//     } catch (err) {
//       console.error('Ошибка при добавлении поста', err);
//       return -1;
//     }
//   }

//   async updatePost(id: number, updatedPost: updatableData) {
//     try {
//       const response = await axios.put<updatableData>(`${innerApi}/posts/updatepost/${id}`, updatedPost);
//       const index = this.posts.findIndex(post => post.id === id);

//       if (index !== -1) {
//         this.posts[index].title = response.data.title; // Обновляем пост
//         this.posts[index].content = response.data.content;
//       }
//     } catch (err) {
//       console.error('Ошибка при обновлении поста', err);
//     }
//   }

//   async deletePost(postId: number) {
//     try {
//       await axios.delete(`${innerApi}/posts/deletepost/${postId}`);
//       runInAction(() => {
//         this.posts = this.posts.filter(post => post.id !== postId); // Удаляем пост
//       });
//     } catch (err) {
//       console.error('Ошибка при удалении поста', err);
//     }
//   }

//   findPostById(id: number){
//     const post = this.posts.find(post => post.id === id);
//     return post;
//   }
// }

// const authStore = new AuthStore();
// export default authStore;

// // import { makeAutoObservable, runInAction } from 'mobx';
// // import api from '../services/axios/api.js';
// // import {
// //   API_URL,
// //   AUTH_LOGIN,
// //   AUTH_LOGOUT,
// //   AUTH_REFRESH,
// //   AUTH_REG,
// // } from '../constants/endpoints/endpointConst.js';

// // class AuthStore {
// //   isAuth;
// //   userData;
// //   isLoading;
// //   constructor() {
// //     this.isAuth = false;
// //     this.userData = {};
// //     this.isLoading = false;
// //     makeAutoObservable(this, {}, { autoBind: true });
// //   }

// //   login = async ({ login, password }) => {
// //     let errorMessage;
// //     try {
// //       this.isLoading = true;
// //       const response = await api.post(AUTH_LOGIN, { login, password });
// //       localStorage.setItem('token', response.data.token);
// //       console.log(response);
// //       runInAction(() => {
// //         this.isAuth = true;
// //         this.userData.userName = response.data.username;
// //       });
// //       console.log();
// //     } catch (err) {
// //       errorMessage = err.response?.data?.message;
// //     } finally {
// //       this.isLoading = false;
// //     }
// //     return errorMessage || null;
// //   };

// //   logout = async () => {
// //     try {
// //       this.isLoading = true;
// //       await api.post(AUTH_LOGOUT);
// //       localStorage.removeItem('token');
// //       runInAction(() => {
// //         this.isAuth = false;
// //       });
// //     } catch (err) {
// //       console.error(err.response?.data?.message);
// //     } finally {
// //       this.isLoading = false;
// //     }
// //   };

// //   registration = async ({ login, password }) => {
// //     let errorMessage;
// //     try {
// //       this.isLoading = true;
// //       const response = await api.post(AUTH_REG, { login, password });
// //       localStorage.setItem('token', response.data.token);
// //       runInAction(() => {
// //         this.isAuth = true;
// //         this.userData.userName = response.data.username;
// //       });
// //     } catch (err) {
// //       console.log(err.response?.data?.message);
// //       errorMessage = err.response?.data?.message;
// //     } finally {
// //       this.isLoading = false;
// //     }
// //     return errorMessage || null;
// //   };

// //   checkAuth = async () => {
// //     try {
// //       this.isLoading = true;
// //       const response = await api.get(API_URL + AUTH_REFRESH, {
// //         withCredentials: true,
// //       });
// //       localStorage.setItem('token', response.data.token);
// //       runInAction(() => {
// //         this.isAuth = true;
// //       });
// //     } catch (err) {
// //       console.error(err.response?.data?.message);
// //     } finally {
// //       this.isLoading = false;
// //     }
// //   };
// // }
// // export default new AuthStore();