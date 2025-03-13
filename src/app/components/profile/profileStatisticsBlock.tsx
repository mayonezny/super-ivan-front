/* eslint-disable no-magic-numbers */
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileStatisticsBlock = ({ activePage, setActivePage, setPrevActivePage, setNextActivePage }: { activePage: number, setActivePage: Dispatch<SetStateAction<number>>, setPrevActivePage: Dispatch<SetStateAction<number>>, setNextActivePage: Dispatch<SetStateAction<number>>}) => {
  const prevPage = 1;
  const nextPage = 3;
  return (
    <div className="flex flex-col w-[546px] h-[420px] bg-white py-6 px-4 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='flex w-full h-full justify-center items-center'>
        <motion.div whileHover={{ opacity: 0.7 }} className='hover:cursor-pointer opacity-0 flex h-full items-center' onClick={() => {
          setPrevActivePage(activePage); setNextActivePage(prevPage); setTimeout(() => {
            setActivePage(prevPage);
          },10);
        }}>
          <IoIosArrowBack className='svg-icon' size={32} title='Предыдущая страница' color='#666'/>
        </motion.div>
        <h1 className="text-gray-400 min-w-[92%] text-center">Раздел в разработке...</h1>
        <motion.div whileHover={{ opacity: 0.7 }} className='hover:cursor-pointer opacity-0 flex h-full items-center' onClick={() => {
          setPrevActivePage(activePage); setNextActivePage(nextPage); setTimeout(() => {
            setActivePage(nextPage);
          },10);
        }}>
          <IoIosArrowForward className='svg-icon' size={32} title='Предыдущая страница' color='#666'/>
        </motion.div>
      </div>
    </div>
  );
};
export default ProfileStatisticsBlock;
