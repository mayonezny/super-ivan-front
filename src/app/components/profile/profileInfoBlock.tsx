/* eslint-disable no-magic-numbers */

'use client';
import ProfileCard from './profileCard';
import TextareaAutosize from 'react-textarea-autosize';
import { IoIosArrowForward } from 'react-icons/io';
import { Dispatch, SetStateAction, useState } from 'react';
import clsx from 'clsx';
const ProfileInfoBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const nextPage = 1;
  const [animationClass, setAnimationClass] = useState('');
  return (
    <div className="flex flex-col w-[546px] bg-white py-6 pl-5 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='flex items-center'>
        <ProfileCard/>
        <div className='flex flex-col ml-4 w-[35%] items-center justify-center leading-[1.36]'>
          <TextareaAutosize className='resize-none w-[100%] focus:outline-none overflow-clip whitespace-pre-wrap' readOnly value={'"Всем привет. Я Иван.\nВсем привет. Я Иван.\nВсем привет. Я Иван. Гол"'}></TextareaAutosize>
        </div>
        <div className={clsx('svg-icon -ml-3 opacity-0', animationClass)} onClick={() => {
          setPrevActivePage(activePage); setNextActivePage(nextPage); setTimeout(() => {
            setActivePage(nextPage);
          },10);
        }} onMouseEnter={() => setAnimationClass('transition-opacity-arrows-enter')} onMouseLeave={() => setAnimationClass('transition-opacity-arrows-leave')}>
          <IoIosArrowForward size={32} title='Следующая страница' color='#666'/>
        </div>
      </div>

    </div>
  );
};
export default ProfileInfoBlock;
