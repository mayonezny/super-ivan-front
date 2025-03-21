
import { makeAutoObservable, runInAction } from 'mobx';
import { innerApi } from 'imp/utils/constants/endpoints';
import api from 'imp/utils/axios/axios';
import { User } from 'imp/utils/interfaces';

interface authInterface {
    login: string,
    password: string
}
class AuthStore {
    isAuth: boolean = false;
    loading: boolean = false;
    error: string | null = null;
    userData: User = {
        uuid: '----',
        token: '',
    };

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    login = async ({ login, password }: authInterface) => {
        let errorMessage: string = '';
        try {
            this.loading = true;
            const response = await api.post<User>(`${innerApi}/auth/login`, { login, password });
            localStorage.setItem('accessToken', response.data.token); //добавить логику для рефреш токена
            console.log(response);
            runInAction(() => {
                this.isAuth = true;
                this.userData.uuid = response.data.uuid;
            });
            console.log();
        } catch (err: any) {
            errorMessage = err.response?.data?.message || 'Сообщение не получено';
        } finally {
            this.loading = false;
        }
        return errorMessage || null;
    };

    logout = async () => {
        try {
            this.loading = true;
            await api.post(`${innerApi}/auth/logout`);
            localStorage.removeItem('accessToken'); //добавить логику для рефреш токена
            runInAction(() => {
                this.isAuth = false;
            });
        } catch (err: any) {
            console.error(err.response?.data?.message);
        } finally {
            this.loading = false;
        }
    };

    register = async ({ login, password }: authInterface) => {
        let errorMessage: string = '';
        try {
            this.loading = true;
            const response = await api.post<User>(`${innerApi}/auth/register`, { login, password });
            localStorage.setItem('accessToken', response.data.token); //добавить логику для рефреш токена
            runInAction(() => {
                this.isAuth = true;
                this.userData.uuid = response.data.uuid;
            });
        } catch (err: any) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message || 'Сообщение не получено';
        } finally {
            this.loading = false;
        }
        return errorMessage || null;
    };

}

const authStore = new AuthStore();
export default authStore;

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

//   login = async ({ login, password }) => {
//     let errorMessage;
//     try {
//       this.isLoading = true;
//       const response = await api.post(AUTH_LOGIN, { login, password });
//       localStorage.setItem('token', response.data.token);
//       console.log(response);
//       runInAction(() => {
//         this.isAuth = true;
//         this.userData.userName = response.data.username;
//       });
//       console.log();
//     } catch (err) {
//       errorMessage = err.response?.data?.message;
//     } finally {
//       this.isLoading = false;
//     }
//     return errorMessage || null;
//   };

//   logout = async () => {
//     try {
//       this.isLoading = true;
//       await api.post(AUTH_LOGOUT);
//       localStorage.removeItem('token');
//       runInAction(() => {
//         this.isAuth = false;
//       });
//     } catch (err) {
//       console.error(err.response?.data?.message);
//     } finally {
//       this.isLoading = false;
//     }
//   };

// registration = async ({ login, password }) => {
//   let errorMessage;
//   try {
//     this.isLoading = true;
//     const response = await api.post(AUTH_REG, { login, password });
//     localStorage.setItem('token', response.data.token);
//     runInAction(() => {
//       this.isAuth = true;
//       this.userData.userName = response.data.username;
//     });
//   } catch (err) {
//     console.log(err.response?.data?.message);
//     errorMessage = err.response?.data?.message;
//   } finally {
//     this.isLoading = false;
//   }
//   return errorMessage || null;
// };

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
