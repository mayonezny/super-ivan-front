'use client';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';
import clsx from 'clsx';
import { useState } from 'react';
interface ProfilePreferencesNavbarProps {
    disabled?: boolean;
    className?: string;
}
const ProfilePreferencesNavbar = ({ disabled, className }: ProfilePreferencesNavbarProps) => {
  const [isEditHovered, setEditHovered] = useState(false);
  const [isDeleteHovered, setDeleteHovered] = useState(false);
  const [isLogoutHovered, setLogoutHovered] = useState(false);
  return (
    <div>
      <div className={
        clsx('flex flex-col items-center gap-4 bg-white p-2 py-3 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]',
          disabled ? 'opacity-0 pointer-events-none' : '',
          className)
      }>
        <div className='svg-icon' onMouseEnter={() => setEditHovered(true)} onMouseLeave={() => setEditHovered(false)}>
          <HiPencilAlt size={26} color='#666'/>
        </div>

        { }
        <div className='svg-icon-react-icons' onMouseEnter={() => setDeleteHovered(true)} onMouseLeave={() => setDeleteHovered(false)}>
          <MdDelete size={26} color='#666'/>
        </div>
        <div className='svg-icon' onMouseEnter={() => setLogoutHovered(true)} onMouseLeave={() => setLogoutHovered(false)}>
          <IoLogIn size={26} color='#666' />
        </div>

      </div>
      <div className={clsx('-z-[1] absolute top-[180px] right-[512px] bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl', isEditHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Редактировать профиль</div>
      <div className={clsx('-z-[1] absolute top-[225px] right-[567px] bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl', isDeleteHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Удалить профиль</div>
      <div className={clsx('-z-[1] absolute top-[270px] right-[655px] bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl', isLogoutHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Выйти</div>
    </div>
  );
};
export default ProfilePreferencesNavbar;
