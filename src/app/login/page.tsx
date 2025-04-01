'use client';
import clsx from 'clsx';
import Header from '../components/header/header';
import ProfileLayout from '../layouts/profileLayout';
import { Checkbox, FormControlLabel } from '@mui/material';
import NavButton from '../components/buttons/navButton';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerDataInterface } from '../register/page';
import authStore from 'imp/store/AuthStore';
import { redirect } from 'next/navigation';


const loginSchema = yup.object({
  email: yup.string().min(6, 'Поле должно содержать не менее 6 символов!').max(40, 'Поле должно содержать не более 40 символов!').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Укажите валидный Email').required('Пожалуйста, укажите ваш Email'),
  password: yup.string().min(6, 'Поле должно содержать не менее 6 символов!').max(40, 'Поле должно содержать не более 40 символов!').required('Пожалуйста, введите свой пароль!')
}).required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema), // передаем схему валидации
  });

  const handleLogin = async (data: registerDataInterface) => {
    const { email, password } = data;
    console.log(data);
    const user = await authStore.login({ email, password }) || null;
    console.log(user);
    if (user === null) {
      redirect('/profile');
    } else if (user === 'UserNotFound') {
      setError('email', {
        type: 'server',
        message: 'Пользователя с таким Email не существует!',
      });
    }
    else if (user === 'PasswordsDoNotMatch') {
      setError('password', {
        type: 'server',
        message: 'Неправильный пароль!',
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-inter)] text-lg bg-gray-100">
        <Header />
        <ProfileLayout className='relative flex flex-col justify-center items-center gap-7'>

          <div
            className={clsx('mt-10 flex flex-col bg-white p-6 rounded-xl shadow-md z-10 gap-4 lg:w-[70%] xl:w-[55%] transition-all duration-700 transform')}
          >
            <h1 className='text-2xl 2xl:text-3xl text-center mb-4'>Вход в аккаунт:</h1>
            <input {...register('email')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Электронная почта...'></input>
            {errors.email && <span className='flex text-red-500 text-xs items-center -mb-[8px] -mt-[8px] ml-2'>{errors.email.message}</span>}
            <input {...register('password')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Пароль...'></input>
            {errors.password && <span className='flex text-red-500 text-xs items-center -mb-[8px] -mt-[8px] ml-2'>{errors.password.message}</span>}
            <FormControlLabel control={<Checkbox />} label="Не запоминать аккаунт" />
            <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 duration-300 rounded-md text-white'>Войти</button>
            <span className='text-center'>Нет аккаунта? <NavButton href='/register' className='!px-0 text-blue-600 hover:text-blue-800 hover:underline'>Зарегистрироваться</NavButton></span>
          </div>
        </ProfileLayout>
      </div>
    </form>
  );
};
export default LoginPage;
