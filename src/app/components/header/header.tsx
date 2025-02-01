import NavButton from '../buttons/navButton';
import Clock from './clock';

const Header = () => {

  return (
    <nav className="sticky top-0 shadow-md bg-white flex justify-between items-center px-5 p-2 w-full text-xl">
      <div className="flex gap-8">
        <NavButton href='/'>Home</NavButton>
        <NavButton href='/about'>About</NavButton>
        <NavButton href='/ivan'>Ivan</NavButton>
      </div>
      <Clock/>
      <div className="flex gap-8">
        <NavButton href='/'>Profile</NavButton>
        <NavButton href='/about'>About</NavButton>
        <NavButton href='/ivan'>Ivan</NavButton>
      </div>
    </nav>
  );
};
export default Header;
