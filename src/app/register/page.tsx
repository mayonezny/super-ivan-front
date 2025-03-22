
'use client';
import clsx from 'clsx';
import Header from '../components/header/header';
import ProfileLayout from '../layouts/profileLayout';
import { Checkbox, FormControlLabel } from '@mui/material';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import authStore from 'imp/store/AuthStore';

interface registerDataInterface {
  email: string,
  password: string,
}

const registerSchema = yup.object({
  email: yup.string().min(6, 'Поле должно содержать не менее 6 символов!').max(40, 'Поле должно содержать не более 40 символов!').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, 'Укажите валидный Email').required('Пожалуйста, укажите ваш Email'),
  password: yup.string().min(6, 'Поле должно содержать не менее 6 символов!').max(40, 'Поле должно содержать не более 40 символов!').required('Пожалуйста, введите свой пароль!'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать!').required('Пожалуйста, подтвердите свой пароль'),
}).required();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema), // передаем схему валидации
  });

  const handleRegister = async (data: registerDataInterface) => {
    const { email, password } = data;
    console.log(data);
    const newUser = await authStore.register({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-inter)] text-lg bg-gray-100">
        <Header />
        <ProfileLayout className='relative flex flex-col justify-center items-center gap-7'>

          <div
            className={clsx('mt-10 flex flex-col bg-white p-6 rounded-xl shadow-md z-10 gap-4 lg:w-[70%] w-[55%] transition-all duration-700 transform')}
          >
            <h1 className='text-3xl text-center mb-4'>Создать аккаунт:</h1>
            <input {...register('email')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Электронная почта...'></input>
            {errors.email && <span className='flex text-red-500 text-xs items-center -mb-[8px] -mt-[8px] ml-2'>{errors.email.message}</span>}
            <input type='password' {...register('password')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Пароль...'></input>
            {errors.password && <span className='flex text-red-500 text-xs items-center -mb-[8px] -mt-[8px] ml-2'>{errors.password.message}</span>}
            <input type='password' {...register('confirmPassword')} className={clsx('bg-[#f0f0f0] rounded-lg w-full p-2 xl:p-3 focus:outline-none font-[family-name:var(--font-roboto-c)] placeholder:px-[2px] placeholder:text-[#a0a0a0] text-lg')} placeholder='Подтвердить пароль...'></input>
            {errors.confirmPassword && <span className='flex text-red-500 text-xs items-center -mb-[8px] -mt-[8px] ml-2'>{errors.confirmPassword.message}</span>}
            <FormControlLabel control={<Checkbox />} label="Не запоминать аккаунт" />
            <button className='p-2 px-4 bg-blue-500 hover:bg-blue-600 duration-300 rounded-md text-white'>Зарегистрироваться</button>
          </div>
        </ProfileLayout>
      </div>
    </form>
  );
};
export default RegisterPage;
