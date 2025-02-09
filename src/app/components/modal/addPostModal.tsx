'use client';

import { useEffect, useState } from 'react';
import Button from '../buttons/button';

const AddPostModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [visible, setVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

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
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700  ${
        showAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Оверлей */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-700 ${
          showAnimation ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Контент модалки */}
      <div
        className={`flex flex-col gap-5 bg-white p-6 rounded-xl shadow-lg z-10 w-[40%] h-[80%] transition-all duration-700 transform ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-medium text-center">Новый пост:</h2>
        <input className='bg-[#f0f0f0] rounded-lg w-full p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0]' placeholder='Заголовок...'></input>
        <textarea className='bg-[#f0f0f0] rounded-lg w-full h-full p-3 font-[family-name:var(--font-roboto-c)] resize-none text-clip focus:outline-none placeholder:px-[2px] placeholder:text-[#a0a0a0]' placeholder='Контент...'></textarea>
        <input className='bg-[#f0f0f0] rounded-lg w-full p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0]' placeholder='Картинка... (норм поле в разработке)'></input>
        <Button className='bg-blue-700 text-white hover:bg-blue-800'>Опубликовать</Button>
        {/* <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
            Закрыть
        </button> */}
      </div>
    </div>
  );
};
export default AddPostModal;
