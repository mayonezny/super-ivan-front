/* eslint-disable no-magic-numbers */
'use client';

import { useEffect, useState } from 'react';
import Button from '../buttons/button';
import ImageUploader from '../services/imageUploader';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import postsStore from 'imp/store/PostsStore';
import clsx from 'clsx';

const addPostSchema = yup.object({
  title: yup.string().min(6, 'Заголовок должен содержать не менее 6 символов!').max(40, 'Заголовок должен содержать не более 40 символов!').required('Пожалуйста, укажите заголовок'),
  content: yup.string().min(20, 'Содержимое поста должно быть не менее 20 символов!').max(1000, 'Обалдеть какое здоровое содержимое!').required('Пожалуйста, укажите содержание поста'),
  pic: yup.mixed().required('Эй! Картинка тоже обязательна!'),
}).required();

const AddPostModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPostSchema), // передаем схему валидации
  });
  const [visible, setVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handlePostUpload = async (data: { pic: { file: File }, title: string; content: string; }) => {
    const formData = new FormData();
    formData.append('pic', data.pic.file, data.pic.file.name);
    const pic = await postsStore.postPicImgSave(formData);

    if(pic){
      const neuesPost: number = await postsStore.addPost({ pic: pic.url, title: data.title, author: 'ivan', content: data.content, picFilename: pic.filename }); //мок на автора, тот будет получаться из куки
      if(neuesPost){
        onClose();
        reset();
      }
    }
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
    <form onSubmit={handleSubmit(handlePostUpload)}>
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
          onClick={() => {
            onClose(); reset();
          }}
        ></div>

        {/* Контент модалки */}
        <div
          className={clsx(`flex flex-col bg-white p-6 rounded-xl shadow-lg z-10 gap-4 w-[40%] h-[80%] transition-all duration-700 transform ${
            showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`)}
        >
          <h2 className="text-3xl font-medium text-center">Новый пост:</h2>
          <input {...register('title')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0]',(!errors.title && (errors.content || errors.pic)) ? 'mb-2' : '')} placeholder='Заголовок...'></input>
          {errors.title && <span className='flex text-red-500 text-sm items-center -mb-[3px] -mt-[3px] ml-2'>{errors.title.message}</span>}
          <textarea {...register('content')} className={clsx('bg-[#f0f0f0] rounded-lg flex-1 w-full h-full p-2 xl:p-3 font-[family-name:var(--font-roboto-c)] resize-none text-clip focus:outline-none placeholder:px-[2px] placeholder:text-[#a0a0a0]', (!errors.content && (errors.title || errors.pic)) ? 'mb-2' : '')} placeholder='Контент...'></textarea>
          {errors.content && <span className='flex text-red-500 text-sm items-center -mb-[3px] -mt-[3px] ml-2'>{errors.content.message}</span>}
          <Controller
            name='pic'
            control={control}
            render={({ field }) => (
              <ImageUploader controllerField={field} className='flex-1'/>
            )}/>
          {errors.pic && <span className='flex text-red-500 text-sm items-center -mt-4 ml-2'>{errors.pic.message}</span>}
          <Button type='submit' className='mt-auto bg-blue-700 text-white hover:bg-blue-800'>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};
export default AddPostModal;
