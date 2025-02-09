'use client';

import { useState } from 'react';
import Filter from '../../../../public/icons/filter';
import Plus from '../../../../public/icons/plus';
import AddPostModal from '../modal/addPostModal';

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-between items-center w-24 p-2 pr-3 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-3xl bg-white'>
      <Plus onClick={() => setIsOpen(true)}/>
      <Filter/>
      <AddPostModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
export default ModalContainer;
