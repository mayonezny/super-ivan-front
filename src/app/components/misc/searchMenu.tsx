/* eslint-disable no-magic-numbers */
'use client';
import clsx from 'clsx';
import Search from '../../../../public/icons/search';
import { useState } from 'react';
import debounce from 'lodash.debounce';
import postsStore from 'imp/store/PostsStore';
import React from 'react';

const SearchMenu = ({ type }: { type: string }) => {
  const [, setSearchText] = useState('');
  const handleSearchChange = debounce(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearchText: string = event.target.value; // Сохраняем текущее значение поля
    setSearchText(currentSearchText);
    if(currentSearchText.length !== 1 ){
      await postsStore.fetchPosts(currentSearchText);
    }
  }, 500);
  return (
    <div className={clsx(type === 'main' && 'w-[20%] mb-2', type === 'blog' && 'w-[65%]', 'flex gap-2 items-center p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-full bg-white')}>
      <Search/>
      <input onChange={handleSearchChange} placeholder='Ключевое слово или автор...' className='focus:outline-none max-w-full w-full pr-1 text-lg placeholder:text-[15px]'></input>
    </div>
  );
};
export default SearchMenu;
