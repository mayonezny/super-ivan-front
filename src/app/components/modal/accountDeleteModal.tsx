/* eslint-disable brace-style */
/* eslint-disable no-magic-numbers */
'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaSadCry } from 'react-icons/fa';

const AccountDeleteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

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
        className={clsx(`flex flex-col items-center justify-between bg-white p-6 rounded-xl shadow-lg z-10 gap-4 2xl:w-[20%] xl:w-[28%] min-h-[15%] transition-all duration-700 transform ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`)}
      >
        <FaSadCry size={64}/>
        <h1 className='2xl:text-xl xl:text-lg'>Вы уверены, что хотите удалить аккаунт?</h1>
        <h2 className='opacity-55 text-xs text-center'>Данная операция необратима и повлечет полное удаление всех данных о Вас, включая Ваши посты</h2>
        <div className='flex gap-2'>
          <button className='p-2 px-4 bg-red-600 rounded-md text-white'>Удалить</button>
          <button onClick={() => {onClose();}} className='p-2 px-4 shadow-[0px_0px_3px_rgba(0,0,0,0.4)] rounded-md'>Отмена</button>
        </div>
      </div>
    </div>

  );
};
export default AccountDeleteModal;
