/* eslint-disable brace-style */

'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import authStore from 'imp/store/AuthStore';
import { redirect } from 'next/navigation';

const LogoutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

  const [visible, setVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleLogout = async () => {
    await authStore.logout();
    onClose();
    redirect('/login');
  };

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
        className={clsx(`flex flex-col items-center justify-between bg-white p-6 pb-4 rounded-xl shadow-lg z-10 2xl:gap-4 xl:gap-8 2xl:w-[20%] xl:w-[22%] min-h-[15%] transition-all duration-700 transform ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`)}
      >
        <h1 className='2xl:text-xl xl:text-lg opacity-70'>Вы уверены, что хотите выйти?</h1>
        <div className='flex gap-2'>
          <button onClick={async () => {await handleLogout();}} className='p-2 px-4 bg-blue-600 hover:bg-blue-700 duration-300 rounded-md text-white'>Выйти</button>
          <button onClick={() => {onClose();}} className='p-2 px-4 shadow-[0px_0px_3px_rgba(0,0,0,0.4)] rounded-md'>Отмена</button>
        </div>
      </div>
    </div>

  );
};
export default LogoutModal;
