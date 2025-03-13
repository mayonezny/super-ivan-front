/* eslint-disable no-magic-numbers */
import { HiMiniIdentification } from 'react-icons/hi2';
import { FaUserGroup } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { ImBubble } from 'react-icons/im';
import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
const ProfileNavbar = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {

  return (
    <div className="flex w-fit h-fit items-center gap-2 justify-center bg-white p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">

      <div className={clsx('svg-icon p-1', activePage === 0 ? 'bg-gray-200 rounded-md' : '')} onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(0);
        setTimeout(() => {
          setActivePage(0);
        },10);
      }}>
        <HiMiniIdentification title='Профиль' size={24} color='#666'/>
      </div>

      <div className={clsx('svg-icon p-1', activePage === 1 ? 'bg-gray-200 rounded-md' : '')} onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(1);
        setTimeout(() => {
          setActivePage(1);
        },10);
      }}>
        <FaUserGroup title='Друзья' size={22} color='#666'/>
      </div>

      <div className={clsx('svg-icon p-1', activePage === 2 ? 'bg-gray-200 rounded-md' : '')} onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(2);
        setTimeout(() => {
          setActivePage(2);
        },10);
      }}>
        <ImStatsDots title='Статистика' size={20} color='#666'/>
      </div>

      <div className={clsx('svg-icon p-1', activePage === 3 ? 'bg-gray-200 rounded-md' : '')} onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(3);
        setTimeout(() => {
          setActivePage(3);
        },10);
      }}>
        <ImBubble title='Чаты' size={20} color='#666'/>
      </div>

    </div>
  );
};
export default ProfileNavbar;
