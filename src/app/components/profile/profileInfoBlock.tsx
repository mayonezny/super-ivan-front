/* eslint-disable no-magic-numbers */

'use client';
import ProfileCard from './profileCard';
import TextareaAutosize from 'react-textarea-autosize';
import { IoIosArrowForward } from 'react-icons/io';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
const ProfileInfoBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const nextPage = 1;
  return (
    <div className="flex flex-col w-[546px] h-[176px] bg-white py-6 pl-5 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='flex items-center h-full'>
        <ProfileCard/>
        <div className='flex flex-col ml-4 w-[35%] items-center justify-center leading-[1.36]'>
          <TextareaAutosize className='resize-none w-[100%] focus:outline-none overflow-clip whitespace-pre-wrap' readOnly value={'"Всем привет. Я Иван.\nВсем привет. Я Иван.\nВсем привет. Я Иван. Гол"'}></TextareaAutosize>
        </div>
        <motion.div whileHover={{ opacity: 0.7 }} className='flex items-center hover:cursor-pointer -ml-3 opacity-0 h-full' onClick={() => {
          setPrevActivePage(activePage); setNextActivePage(nextPage); setTimeout(() => {
            setActivePage(nextPage);
          },10);
        }}>
          <IoIosArrowForward className='svg-icon' size={32} title='Следующая страница' color='#666'/>
        </motion.div>
      </div>

    </div>
  );
};
export default ProfileInfoBlock;
