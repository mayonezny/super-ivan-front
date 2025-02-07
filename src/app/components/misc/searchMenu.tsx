import clsx from 'clsx';
import Search from '../../../../public/icons/search';

const SearchMenu = ({ type }) => {

  return (
    <div className={clsx(type === 'main' && 'w-[20%] mb-2', type === 'blog' && 'w-[65%]', 'flex gap-2 items-center p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-full bg-white')}>
      <Search/>
      <input className='focus:outline-none max-w-full w-full pr-1 text-lg'></input>
    </div>
  );
};
export default SearchMenu;
