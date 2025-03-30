
import { makeAutoObservable, runInAction } from 'mobx';
import { outerApi } from 'imp/utils/constants/endpoints';
import api from 'imp/utils/axios/axios';
import { User } from 'imp/utils/interfaces';
import axios from 'axios';

export interface authInterface {
    email: string,
    password: string
}
class AuthStore {
  isAuth: boolean = false;
  loading: boolean = false;
  error: string | null = null;
  userData: User = {
    email: '',
    accessToken: '',
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    console.log(this.isAuth);
  }

  setUserData = (data: User) => {
    this.userData.email = data.email;
    this.userData.accessToken = data.accessToken;
  };

  login = async ({ email, password }: authInterface) => {
    let errorMessage: string = '';
    try {
      this.loading = true;
      const response = await api.post<User>(`${outerApi}/auth/login`, { email, password });
      localStorage.setItem('accessToken', response.data.accessToken); //добавить логику для рефреш токена
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
      await api.post(`${outerApi}/auth/logout`);
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

  register = async ({ email, password }: authInterface) => {
    console.log('l', email, 'p', password);
    let errorMessage: string = '';
    try {
      this.loading = true;
      const response = await axios.post<User>(`${outerApi}/auth/register`, { email, password }, { withCredentials: true });
      const error: string = response.data.error;
      console.log(error);
      if (response.data.accessToken !== undefined) {
        localStorage.setItem('accessToken', response.data.accessToken); //добавить логику для рефреш токена
        runInAction(() => {
          this.isAuth = true;
          this.userData.email = response.data.email;
        });
      }
    } catch (err: any) {
      console.log(err);
      errorMessage = err.response?.data?.message || 'Сообщение не получено';
      const emailUniqueMessage: string | undefined = err.response.data.error.name;
      if(emailUniqueMessage === 'SequelizeUniqueConstraintError'){
        errorMessage = 'emailExists';
      }

    } finally {
      this.loading = false;
    }
    return errorMessage === '' ? null : errorMessage;
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
