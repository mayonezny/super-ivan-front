
'use client';

const PizdukTextField = ({ ...props }) => {
  const {
    data,
  } = props;
  return (
    <p>{data === null ? 'Саси! Пусто!' : data}</p>
  );
};
export default PizdukTextField;
