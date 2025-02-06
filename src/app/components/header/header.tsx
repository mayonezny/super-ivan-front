import NavButton from '../buttons/navButton';
import Clock from './clock';
import Image from 'next/image';
const Header = () => {

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white flex justify-between items-center w-full text-xl 2xl:px-5 p-1 xl:px-2">
      <div className="flex gap-8 items-center">
        <NavButton href='/' className='px-0 py-0'>
          <Image
            src='/ВАУ-CHEESE-MADNESS.svg'
            alt='madnessito'
            width={64}
            height={64}
          />
        </NavButton>
        <NavButton href='/about'>О сайте</NavButton>
      </div>
      <Clock/>
      <div className="flex gap-8">
        <NavButton href='/profile'>Профиль</NavButton>
        <NavButton href='/yourBlog'>Блог</NavButton>

      </div>
    </nav>
  );
};
export default Header;
