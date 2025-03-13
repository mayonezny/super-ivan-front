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
    <div className={className}>
      <div className={
        clsx('flex flex-col items-center gap-4 bg-white p-2 py-3 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]',
          disabled ? 'opacity-0 pointer-events-none' : '')
      }>
        <div className='svg-icon' onMouseEnter={() => setEditHovered(true)} onMouseLeave={() => setEditHovered(false)}>
          <HiPencilAlt size={26} color='#666'/>
        </div>

        <div className='svg-icon-react-icons' onMouseEnter={() => setDeleteHovered(true)} onMouseLeave={() => setDeleteHovered(false)}>
          <MdDelete size={26} color='#666'/>
        </div>
        <div className='svg-icon' onMouseEnter={() => setLogoutHovered(true)} onMouseLeave={() => setLogoutHovered(false)}>
          <IoLogIn size={26} color='#666' />
        </div>

      </div>
      <div className={clsx('-z-[1] absolute top-[3%] right-[-200%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isEditHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Редактировать профиль</div>
      <div className={clsx('-z-[1] absolute top-[35%] right-[-75%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isDeleteHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Удалить профиль</div>
      <div className={clsx('-z-[1] absolute top-[66%] right-[135%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isLogoutHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Выйти</div>
    </div>
  );
};
export default ProfilePreferencesNavbar;
