import Search from '../../../../public/icons/search';

const SearchMenu = () => {

  return (
    <div className='flex gap-2 w-[65%] items-center p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-full bg-white'>
      <Search/>
      <input className='focus:outline-none max-w-full w-full pr-1 text-lg'></input>
    </div>
  );
};
export default SearchMenu;
