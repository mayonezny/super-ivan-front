/* eslint-disable no-magic-numbers */
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileMessagesBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const [animationClass, setAnimationClass] = useState('');
  const prevPage = 2;
  return (
    <div className="flex flex-col w-[546px] h-[420px] justify-center items-center bg-white py-6 px-4 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='flex w-full justify-center'>
        <div className={clsx('svg-icon opacity-0', animationClass)} onClick={() => {
          setPrevActivePage(activePage); setNextActivePage(prevPage); setTimeout(() => {
            setActivePage(prevPage);
          },10);
        }} onMouseEnter={() => setAnimationClass('transition-opacity-arrows-enter')} onMouseLeave={() => setAnimationClass('transition-opacity-arrows-leave')}>
          <IoIosArrowBack size={32} title='Предыдущая страница' color='#666'/>
        </div>
        <h1 className="text-gray-400 min-w-[99%] text-center">Раздел в разработке...</h1>
      </div>
    </div>
  );
};
export default ProfileMessagesBlock;
