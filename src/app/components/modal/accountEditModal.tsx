/* eslint-disable brace-style */
/* eslint-disable no-magic-numbers */
'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const AccountEditModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

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
        className={clsx(`flex flex-col bg-white p-6 rounded-xl shadow-lg z-10 gap-4 w-[40%] h-[80%] transition-all duration-700 transform ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`)}
      >
        <h1 className='text-2xl text-center mb-6'>Редактировать профиль:</h1>
        <div className='flex-1 grid grid-cols-2 gap-x-6 gap-y-3 content-start'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl'>Меня зовут:</h1>
            <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} defaultValue='Ваня' placeholder='Мне нужно знать твое имя чтобы навести порчу...'></input>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl'>Моя почта:</h1>
            <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} defaultValue='ivanzapara04@mail.ru' placeholder='Это для ФСБ...'></input>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl'>Моя группа:</h1>
            <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} defaultValue='ВПР32' placeholder='А группу чтобы сообщить в деканат...'></input>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl'>У меня днюха:</h1>
            <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} defaultValue='11.09.2001' placeholder='А тут я просто хочу узнать о тебе побольше... ♥'></input>
          </div>
          <div className='flex flex-col h-full gap-2 col-span-2 row-span-2 2xl:min-h-[350px] xl:min-h-[200px] '>
            <h1 className='text-xl'>Что я хочу сказать этому миру:</h1>
            <textarea className={clsx('bg-[#f0f0f0] rounded-lg flex-1 w-full h-full p-2 xl:p-3 font-[family-name:var(--font-roboto-c)] resize-none text-clip focus:outline-none placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} defaultValue='Дарова, я Иванко' placeholder='Давай, расскажи о себе что-то новое...'></textarea>
          </div>
        </div>

        <div className='flex gap-2'>
          <button className='p-2 px-4 bg-blue-600 hover:bg-blue-700 duration-300 rounded-md text-white'>Подтвердить</button>
          <button onClick={() => {onClose();}} className='p-2 px-4 shadow-[0px_0px_3px_rgba(0,0,0,0.4)] rounded-md'>Отмена</button>
        </div>
      </div>
    </div>

  );
};
export default AccountEditModal;
