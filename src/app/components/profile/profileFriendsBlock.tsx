/* eslint-disable no-magic-numbers */

import { Dispatch, SetStateAction, useState } from 'react';
import ProfilePic from './profilePic';
import clsx from 'clsx';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileFriendsBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const [animationClass, setAnimationClass] = useState('');
  const prevPage = 0;
  const nextPage = 2;
  return (
    <div className="flex w-[580px] items-center bg-white py-6 px-1 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className={clsx('svg-icon opacity-0', animationClass)} onClick={() => {
        setPrevActivePage(activePage); setNextActivePage(prevPage); setTimeout(() => {
          setActivePage(prevPage);
        },10);
      }} onMouseEnter={() => setAnimationClass('transition-opacity-arrows-enter')} onMouseLeave={() => setAnimationClass('transition-opacity-arrows-leave')}>
        <IoIosArrowBack size={32} title='Предыдущая страница' color='#666'/>
      </div>
      <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-around items-center leading-5 text-center">
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец Купер Пердоле</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец Купер Пердоле</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец Купер Пердоле</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец Купер Пердоле</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <ProfilePic size={80}/>
          <h1>Женя Чеченец Купер Пердоле</h1>
        </div>
      </div>
      <div className={clsx('svg-icon opacity-0', animationClass)} onClick={() => {
        setPrevActivePage(activePage); setNextActivePage(nextPage); setTimeout(() => {
          setActivePage(nextPage);
        },10);
      }} onMouseEnter={() => setAnimationClass('transition-opacity-arrows-enter')} onMouseLeave={() => setAnimationClass('transition-opacity-arrows-leave')}>
        <IoIosArrowForward size={32} title='Предыдущая страница' color='#666'/>
      </div>
    </div>
  );
};
export default ProfileFriendsBlock;
