/* eslint-disable no-magic-numbers */
import { HiMiniIdentification } from 'react-icons/hi2';
import { FaUserGroup } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { ImBubble } from 'react-icons/im';
import { Dispatch, SetStateAction } from 'react';
const ProfileNavbar = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {

  return (
    <div className="flex w-fit h-fit items-center gap-5 justify-center bg-white px-3 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='svg-icon' onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(0);
        setTimeout(() => {
          setActivePage(0);
        },10);
      }}>
        <HiMiniIdentification title='Профиль' size={24} color={activePage === 0 ? '#333' : '#666'}/>
      </div>
      <div className='svg-icon' onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(1);
        setTimeout(() => {
          setActivePage(1);
        },10);
      }}>
        <FaUserGroup title='Друзья' size={22} color={activePage === 1 ? '#333' : '#666'}/>
      </div>
      <div className='svg-icon' onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(2);
        setTimeout(() => {
          setActivePage(2);
        },10);
      }}>
        <ImStatsDots title='Статистика' size={20} color={activePage === 2 ? '#222' : '#666'}/>
      </div>
      <div className='svg-icon' onClick={() => {
        setPrevActivePage(activePage);
        setNextActivePage(3);
        setTimeout(() => {
          setActivePage(3);
        },10);
      }}>
        <ImBubble title='Чаты' size={20} color={activePage === 3 ? '#333' : '#666'}/>
      </div>

    </div>
  );
};
export default ProfileNavbar;
