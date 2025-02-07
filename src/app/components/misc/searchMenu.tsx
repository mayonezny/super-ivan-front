/* eslint-disable no-magic-numbers */
'use client';
import clsx from 'clsx';
import Search from '../../../../public/icons/search';
import { useState } from 'react';
import debounce from 'lodash.debounce';
import postsStore from 'imp/store/PostsStore';

const SearchMenu = ({ type }) => {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = debounce((event) => {
    const currentSearchText: string = event.target.value; // Сохраняем текущее значение поля
    setSearchText(currentSearchText);
    if(currentSearchText.length !== 1 ){
      postsStore.fetchPosts(currentSearchText);
    }

  }, 500);
  return (
    <div className={clsx(type === 'main' && 'w-[20%] mb-2', type === 'blog' && 'w-[65%]', 'flex gap-2 items-center p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-full bg-white')}>
      <Search/>
      <input onChange={handleSearchChange} className='focus:outline-none max-w-full w-full pr-1 text-lg'></input>
    </div>
  );
};
export default SearchMenu;
