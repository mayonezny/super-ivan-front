/* eslint-disable no-magic-numbers */

'use client';
import { useState } from 'react';
import Header from '../components/header/header';
import ProfileInfoBlock from '../components/profile/profileInfoBlock';
import ProfileNavbar from '../components/profile/profileNavbar';
import ProfilePreferencesNavbar from '../components/profile/profilePreferencesNavbar';
import ProfileLayout from '../layouts/profileLayout';
import ProfileFriendsBlock from '../components/profile/profileFriendsBlock';
import ProfileStatisticsBlock from '../components/profile/profileStatisticsBlock';
import ProfileMessagesBlock from '../components/profile/profileMessagesBlock';
import { motion, AnimatePresence } from 'framer-motion';
const ProfilePage = () => {
  const [activePage, setActivePage] = useState(0);
  const [prevActivePage, setPrevActivePage] = useState(0);
  const [nextActivePage, setNextActivePage] = useState(0);

  const components = [
    ProfileInfoBlock,
    ProfileFriendsBlock,
    ProfileStatisticsBlock,
    ProfileMessagesBlock,
  ];

  const CurrentComponent = components[activePage];

  return (
    <div className="z-0 flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-100">
      <Header/>
      <ProfileLayout className='relative z-10 flex justify-center items-center gap-5'>
        <div className='flex flex-col items-center gap-5'>
          <ProfileNavbar activePage={activePage} setActivePage={setActivePage} setPrevActivePage={setPrevActivePage} setNextActivePage={setNextActivePage}/>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage} // Ключ меняется → Framer понимает, что компонент сменился
              initial={{ opacity: (activePage === 0 && prevActivePage === 0) ? 1 : 0, x: (activePage === 0 && prevActivePage === 0) ? 0 : ((activePage > prevActivePage) ? 50 : -50)}} // Начальная позиция (слева)
              animate={{ opacity: 1, x: 0 }} // Анимация входа (появление)
              exit={{ opacity: 0, x: ((activePage > nextActivePage) ? 50 : -50) }} // Анимация выхода (уходит вправо)
              transition={{ duration: 0.5 }} // Длительность анимации
              className="w-full h-full"
            >
              <CurrentComponent activePage={activePage} setActivePage={setActivePage} setPrevActivePage={setPrevActivePage} setNextActivePage={setNextActivePage}/>
            </motion.div>
          </AnimatePresence>
        </div>
        <ProfilePreferencesNavbar className='absolute z-50 top-[90px] 2xl:right-[10px] xl:right-[-70px] lg:right-[-120px] md:right-[-160px] sm:right-[-200px] right-[-240px]'/>

      </ProfileLayout>
    </div>
  );
};
export default ProfilePage;
