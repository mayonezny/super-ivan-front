/* eslint-disable no-magic-numbers */
'use client';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ElementType, useState } from 'react';
import postsStore from 'imp/store/PostsStore';
import Link from 'next/link';
import { Post } from 'imp/app/page';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cross from '../../../../public/icons/cross';
import Checkmark from '../../../../public/icons/Checkmark';
import TextareaAutosize from 'react-textarea-autosize';
import Sun from '../../../../public/icons/sun';
import clsx from 'clsx';
type PostCard = Post & {as : ElementType, edit: boolean}
const addPostSchema = yup.object({
  title: yup.string().min(6, 'Заголовок должен содержать не менее 6 символов!').max(40, 'Заголовок должен содержать не более 40 символов!').required('Пожалуйста, укажите заголовок'),
  content: yup.string().min(20, 'Содержимое поста должно быть не менее 20 символов!').max(1000, 'Обалдеть какое здоровое содержимое!').required('Пожалуйста, укажите содержание поста'),
}).required();
const Card = ({ id, href, pic, title, author, date, picFilename, content, ...props }: PostCard) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPostSchema), // передаем схему валидации
  });
  const {
    as,
    edit,
  } = props;
  const Component = edit ? 'div' : as;
  const [menuOpen, setMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [contentColorBlack, setContentColorBlack] = useState(false);
  const handlePostDelete = async () => {
    await postsStore.deletePost(Number(id));
    await postsStore.postPicImgDelete(String(picFilename));
  };
  const handlePostUpdate =  () => {
    console.error('eblan');
  };
  return (

    <div className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.2)] bg-white rounded-lg flex justify-between bg-cover bg-center transition-transform duration-300 hover:scale-105 2xl:w-card-2xl 2xl:h-card-2xl xl:w-card-xl xl:h-card-xl" style={{ backgroundImage: `url(${pic})` }}>
      { }
      <Component href={!edit ? href : null} onClick={edit ? editMode ? () => {} : () => setMenuOpen(!menuOpen) : () => {}}>
        <form onSubmit={handleSubmit(handlePostUpdate)}>
          <div className="gap-5 hover:cursor-pointer absolute rounded-lg flex flex-col p-5 inset-0 bg-gradient-to-b from-white/100 via-white/30 to-black/100">
            {editMode ? <div className='flex items-center gap-2'>
              <input {...register('title')} defaultValue={title} className='focus:outline-none flex-grow-[0.9] bg-transparent border-b-black border-b-2 font-bold text-[22px] font-[family-name:var(--font-roboto-c)]'></input>
              <button onClick={() => {
                reset(); setEditMode(false);
              }}>
                <Cross/>
              </button>
              <button type='submit'>
                <Checkmark/>
              </button>
            </div> : <span className="flex-grow font-bold text-[22px] font-[family-name:var(--font-roboto-c)]">{title}</span>}
            {errors.title && <span className='-mt-4 -mb-5 text-red-500 text-sm'>{errors.title.message}</span>}
            {editMode ?
              <div className='flex gap-2'>
                <TextareaAutosize minRows={1} maxRows={7} {...register('content')} className={clsx('-mb-5 flex-grow whitespace-pre-wrap break-words focus:outline-none bg-transparent resize-none font-bold border-b-black border-b-2', !contentColorBlack && 'text-white')} defaultValue={content}></TextareaAutosize>
                <button type='button' onClick={() => setContentColorBlack(prevState => !prevState)}><Sun color={contentColorBlack ? '#fff' : '#000'}/></button>
              </div>  : <></>}
            {errors.content && <span className='text-red-500 text-sm'>{errors.content.message}</span>}
            <div className='flex justify-between mt-auto'>
              <h1 className="font-bold text-[22px] font-[family-name:var(--font-roboto-c)] text-white">{author && `Автор: ${author}`}</h1>
              <h1 className="font-bold text-[20px] font-[family-name:var(--font-roboto-c)] text-white">{date && `${format(date, 'dd MMMM, HH:mm', { locale: ru })}`}</h1>
            </div>
          </div>
        </form>
      </Component>
      {menuOpen && (
        <div className="absolute bottom-0 rounded-lg *:rounded-lg left-0 w-full bg-white shadow-lg p-4 *:px-4 transition-transform duration-300 transform translate-y-0 text-lg">

          <button className="w-full text-left p-2 hover:bg-gray-100">{/*мок, не мок будет када придумаем интерфейс норм просмотра постов*/}
            <div className='flex *:w-full'>
              <Link href={String(href)}>Открыть содержимое</Link>
            </div>
          </button>
          {/* eslint-disable-next-line brace-style */}
          <button className="w-full text-left p-2 hover:bg-gray-100" onClick={() => {setEditMode(!editMode); setMenuOpen(false);}}>
            {editMode ? 'Закончить редактирование' : 'Редактировать'}
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-100" onClick={handlePostDelete}>
            Удалить
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;
