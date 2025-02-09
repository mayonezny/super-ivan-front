'use client';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';
import Pencil from '../../../../public/icons/pencil';
import postsStore from 'imp/store/PostsStore';
const Card = ({ id, href, pic, title, author, date, ...props }) => {
  const {
    as,
    edit,
  } = props;
  const Component = edit ? 'div' : as;
  const [menuOpen, setMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const handlePostDelete = async () => {
    await postsStore.deletePost(id);
  };
  return (

    <div className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.2)] bg-white rounded-lg flex justify-between bg-cover bg-center transition-transform duration-300 hover:scale-105 2xl:w-card-2xl 2xl:h-card-2xl xl:w-card-xl xl:h-card-xl" style={{ backgroundImage: `url(${pic})` }}>
      { }
      <Component href={!edit ? href : null} onClick={edit ? () => setMenuOpen(!menuOpen) : () => {}}>
        <div className="hover:cursor-pointer absolute rounded-lg flex flex-col justify-between p-5 inset-0 bg-gradient-to-b from-white/100 via-white/30 to-black/100">
          <span className="flex gap-2 font-bold text-[22px] font-[family-name:var(--font-roboto-c)]">{editMode && <Pencil className='mt-1'/>}{title}</span>
          <div className='flex justify-between'>
            <h1 className="font-bold text-[22px] font-[family-name:var(--font-roboto-c)] text-white">{author && `Автор: ${author}`}</h1>
            <h1 className="font-bold text-[20px] font-[family-name:var(--font-roboto-c)] text-white">{date && `${format(date, 'dd MMMM, HH:mm', { locale: ru })}`}</h1>
          </div>

        </div>
      </Component>
      {menuOpen && (
        <div className="absolute bottom-0 rounded-lg *:rounded-lg left-0 w-full bg-white shadow-lg p-4 *:px-4 transition-transform duration-300 transform translate-y-0 text-lg">
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
