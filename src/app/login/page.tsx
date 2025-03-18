
import clsx from 'clsx';
import Header from '../components/header/header';
import ProfileLayout from '../layouts/profileLayout';
import { Checkbox, FormControlLabel } from '@mui/material';

const LoginPage = () => {

  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-inter)] text-lg bg-gray-100">
      <Header/>
      <ProfileLayout className='relative flex flex-col justify-center items-center gap-7'>

        <div
          className={clsx('mt-10 flex flex-col bg-white p-6 rounded-xl shadow-md z-10 gap-4 w-[55%] transition-all duration-700 transform')}
        >
          <h1 className='text-3xl text-center mb-4'>Вход в аккаунт:</h1>
          <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Электронная почта...'></input>
          <input className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Пароль...'></input>
          <FormControlLabel control={<Checkbox />} label="Не запоминать аккаунт"/>
          <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 duration-300 rounded-md text-white'>Войти</button>
        </div>
      </ProfileLayout>
    </div>
  );
};
export default LoginPage;
