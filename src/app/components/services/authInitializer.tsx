'use client';
import { useEffect } from 'react';
import api from 'imp/utils/axios/axios';
import authStore from 'imp/store/AuthStore';
import { outerApi } from 'imp/utils/constants/endpoints';
import { User } from 'imp/utils/interfaces';

export default function AuthInitializer() {

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data }: { data: User } = await api.post(`${outerApi}/auth/refresh`, { 'zzz': 'zzz' }, { headers: { 'Content-Type': 'application/json' } });
        console.log(data);
        authStore.setUserData({ email: data.email, accessToken: data.accessToken });
        authStore.isAuth = true;
        console.log(authStore.isAuth);
      } catch {
        authStore.isAuth = false;
      }
    };

    initAuth();
  }, []);

  return null; // ничего не рендерим — просто запускаем useEffect
}
