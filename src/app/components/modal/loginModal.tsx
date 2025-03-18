/* eslint-disable brace-style */
/* eslint-disable no-magic-numbers */
'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

  const [visible, setVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  //   const handleLogout = () => {

  //     if(success){

  //         onClose();
  //         reset();

  //     }
  //   };

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // Добавляем в DOM
      setTimeout(() => setShowAnimation(true), 10); // Запускаем анимацию с задержкой
    } else {
      setShowAnimation(false); // Запускаем анимацию исчезновения
      setTimeout(() => setVisible(false), 300); // Удаляем из DOM после анимации
    }
  }, [isOpen]);

  if (!visible) return null;

  return (

    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700  ${showAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Оверлей */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-700 ${showAnimation ? 'opacity-100' : 'opacity-0'}`} onClick={() => {onClose();}}></div>

      {/* Контент модалки */}
      <div
        className={clsx(`-mt-64 flex flex-col bg-white p-6 rounded-xl shadow-md z-10 gap-4 w-[20%] transition-all duration-700 transform ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`)}
      >
        <h1 className='text-3xl text-center mb-4'>Вход в аккаунт:</h1>
        <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Электронная почта...'></input>
        <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg mb-4')} placeholder='Пароль...'></input>
        <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 duration-300 rounded-md text-white'>Войти</button>
      </div>
    </div>

  );
};
export default LoginModal;
