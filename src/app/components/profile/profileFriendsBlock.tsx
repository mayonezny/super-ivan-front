/* eslint-disable no-magic-numbers */

import { Dispatch, SetStateAction } from 'react';
import ProfilePic from './profilePic';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';

const ProfileFriendsBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const prevPage = 0;
  const nextPage = 2;
  return (
    <div className="flex w-[580px] h-[480px] justify-center items-center bg-white py-6 px-1 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <motion.div whileHover={{ opacity: 0.7 }} className='hover:cursor-pointer opacity-0 flex h-full items-center' onClick={() => {
        setPrevActivePage(activePage); setNextActivePage(prevPage); setTimeout(() => {
          setActivePage(prevPage);
        },10);
      }}>
        <IoIosArrowBack className='svg-icon' size={32} title='Предыдущая страница' color='#666'/>
      </motion.div>
      <div className="grid grid-cols-4 grid-rows-[repeat(3, auto)] gap-y-4 gap-x-2 overflow-y-auto h-full justify-around items-center leading-5 text-center">
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
      <motion.div whileHover={{ opacity: 0.7 }} className='hover:cursor-pointer opacity-0 flex h-full items-center' onClick={() => {
        setPrevActivePage(activePage); setNextActivePage(nextPage); setTimeout(() => {
          setActivePage(nextPage);
        },10);
      }}>
        <IoIosArrowForward className='svg-icon' size={32} title='Предыдущая страница' color='#666'/>
      </motion.div>
    </div>
  );
};
export default ProfileFriendsBlock;
