'use client';
import { HiPencilAlt } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';
import clsx from 'clsx';
import { useState } from 'react';
import LogoutModal from '../modal/logoutModal';
import ModalContainer from '../modal/modalContainer';
import AccountDeleteModal from '../modal/accountDeleteModal';
import AccountEditModal from '../modal/accountEditModal';
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
        <div onMouseEnter={() => setEditHovered(true)} onMouseLeave={() => setEditHovered(false)}>
          <ModalContainer ModalTrigger={HiPencilAlt} triggerProps={{ size: 26, color: '#666', className: 'svg-icon'}} Modal={AccountEditModal}/>
        </div>

        <div onMouseEnter={() => setDeleteHovered(true)} onMouseLeave={() => setDeleteHovered(false)}>
          <ModalContainer ModalTrigger={MdDelete} triggerProps={{ size: 26, className: 'svg-icon-react-icons'}} Modal={AccountDeleteModal}/>
        </div>
        <div onMouseEnter={() => setLogoutHovered(true)} onMouseLeave={() => setLogoutHovered(false)}>
          <ModalContainer ModalTrigger={IoLogIn} triggerProps={{ size: 26, color: '#666', className: 'svg-icon'}} Modal={LogoutModal}/>
        </div>

      </div>
      <div className={clsx('-z-[1] absolute top-[3%] right-[-200%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isEditHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Редактировать профиль</div>
      <div className={clsx('-z-[1] absolute top-[35%] right-[-75%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isDeleteHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Удалить профиль</div>
      <div className={clsx('-z-[1] absolute top-[66%] right-[135%] text-nowrap bg-white pl-8 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl invisible', isLogoutHovered ? 'animate-button-text-enter' : 'animate-button-text-leave')}>Выйти</div>
    </div>
  );
};
export default ProfilePreferencesNavbar;
