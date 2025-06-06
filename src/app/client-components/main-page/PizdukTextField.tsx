
'use client';

const PizdukTextField = ({ ...props }) => {
  const {
    data,
  } = props;
  return (
    <>
      <p className="font-semibold text-4xl pb-6">{data === null ? 'Что такое Vpr4Ever? Это единый центр общения всех студентов вашего университета! ' : data}</p>
      <h2 className="text-2xl pb-20">Для того, чтобы воспользоваться сайтом, войдите в аккаунт. Проскроллив вниз вы можете взглянуть на случайные посты различных авторов.</h2>
    </>
  );
};
export default PizdukTextField;
