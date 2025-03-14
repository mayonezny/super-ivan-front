'use client';
import { useState } from 'react';
import Header from '../components/header/header';
import { MdDelete } from 'react-icons/md';
import { GiHeartWings } from 'react-icons/gi';
import UploadProgress from './labo';
const AboutPage = () => {
  const tv = {
    brand: 'Samsung',
    model: 'QLED-55',
    matrix: 'VA',
    screenSize: '55 дюймов',
    serialNumber: '1234567890',
  };
  const randword = ['Перфоратор', 'Кабачки', 'Телефон', 'Вивобук', 'Буровая установка', 'Синтезатор Roland D-50', 'Стиральная машина Asus', 'Окно с теплоизоляцией', 'Иван', 'Пасхолко'];
  const [mas, setMas] = useState(['Матрица', 'Диагональ экрана', 'Серийный номер']);
  const [actives, setActives] = useState([1, 1, 1]);
  const addElement = () => {
    const rand = Math.floor(Math.random() * randword.length);
    setMas(mas.concat(randword[rand]));
    setActives(actives.concat(1));
  };
  const removeElement = (index: number) => {
    const newActives = actives.map((element, i) => {
      if(i === index){
        return 0;
      } else{
        return element;
      }
    });
    setActives(newActives);
    // setMas(mas.filter((_, i) => i !== index));
  };
  const resurrectElement = (index: number) => {
    const newActives = actives.map((element, i) => {
      if(i === index){
        return 1;
      } else{
        return element;
      }
    });
    setActives(newActives);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)]">
      <Header/>
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Телевизор {tv.brand} {tv.model}</h2>
        <div className="space-y-2">
          {mas.map((label, index) => (
            <div
              key={index}
              className={`flex p-2 justify-between rounded ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${actives[index] === 0 ? 'opacity-50' : ''}`}
            >
              <div><strong>{label}:</strong> {mas[index] === 'Матрица' ? tv['matrix'] : mas[index] === 'Диагональ экрана' ? tv['screenSize'] : mas[index] === 'Серийный номер' ? tv['serialNumber'] : randword[Math.floor(Math.random() * randword.length)]}</div>
              <div className='flex'>
                <MdDelete onClick={() => removeElement(index)} className={`svg-icon-react-icons ${actives[index] === 1 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#666'/>
                <GiHeartWings onClick={() => resurrectElement(index)} className={`svg-icon-react-icons ${actives[index] === 0 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#000'/>
              </div>

            </div>
          ))}
          <button onClick={addElement} className='p-2 rounded w-full bg-gradient-to-r from-gray-100 via-green-500 to-gray-100 text-white'><h1 className='text-center'>Добавить элемент</h1></button>
          {/* <button onClick={removeElement} className='p-2 rounded w-full bg-gradient-to-r from-gray-100 via-red-500 to-gray-100 text-white'><h1 className='text-center'>Удалить</h1></button> */}
        </div>
      </div>
      <UploadProgress/>
    </div>
  );
};
export default AboutPage;
