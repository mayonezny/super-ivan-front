'use client';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import { MdDelete, MdEdit } from 'react-icons/md';
import { GiHeartWings } from 'react-icons/gi';

const AboutPage = () => {
  const tv = {
    brand: 'Samsung',
    model: 'QLED-55',
    matrix: 'VA',
    screenSize: '55 дюймов',
    serialNumber: '1234567890',
  };

  const randword = ['Перфоратор', 'Кабачки', 'Телефон', 'Вивобук', 'Буровая установка', 'Синтезатор Roland D-50', 'Стиральная машина Asus', 'Окно с теплоизоляцией', 'Иван', 'Пасхолко'];
  const [mas, setMas] = useState([
    { label: 'Матрица', description: tv.matrix },
    { label: 'Диагональ экрана', description: tv.screenSize },
    { label: 'Серийный номер', description: tv.serialNumber },
  ]);
  const [actives, setActives] = useState([1, 1, 1]);
  const [newElement, setNewElement] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedMas = localStorage.getItem('mas');
    const savedActives = localStorage.getItem('actives');
    if (savedMas && savedActives) {
      setMas(JSON.parse(savedMas));
      setActives(JSON.parse(savedActives));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mas', JSON.stringify(mas));
    localStorage.setItem('actives', JSON.stringify(actives));
  }, [mas, actives]);

  const addElement = () => {
    const [label, description] = newElement.split(':');
    if (label.trim() !== '' && description.trim() !== '') {
      setMas([...mas, { label: label.trim(), description: description.trim() }]);
      setActives([...actives, 1]);
      setNewElement('');
    }
  };

  const removeElement = (index) => {
    const newActives = actives.map((element, i) => {
      if (i === index) {
        return 0;
      } else {
        return element;
      }
    });
    setActives(newActives);
  };

  const resurrectElement = (index) => {
    const newActives = actives.map((element, i) => {
      if (i === index) {
        return 1;
      } else {
        return element;
      }
    });
    setActives(newActives);
  };

  const editElement = (index) => {
    setEditIndex(index);
    setNewElement(`${mas[index].label}:${mas[index].description}`);
  };

  const saveElement = () => {
    const [label, description] = newElement.split(':');
    if (label.trim() !== '' && description.trim() !== '') {
      const newMas = mas.map((element, i) => {
        if (i === editIndex) {
          return { label: label.trim(), description: description.trim() };
        } else {
          return element;
        }
      });
      setMas(newMas);
      setEditIndex(null);
      setNewElement('');
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)]">
      <Header />
      <div className='flex'>
        <div className="border p-4 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Телевизор {tv.brand} {tv.model}</h2>
          <div className="space-y-2">
            {mas.map((item, index) => (
              <div
                key={index}
                className={`flex p-2 justify-between rounded ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${actives[index] === 0 ? 'opacity-50' : ''}`}
              >
                {editIndex === index ? (
                  <input
                    type="text"
                    value={newElement}
                    onChange={(e) => setNewElement(e.target.value)}
                    className="border p-1 rounded"
                  />
                ) : (
                  <div><strong>{item.label}:</strong> {item.description}</div>
                )}
                <div className='flex'>
                  {editIndex === index ? (
                    <MdEdit onClick={saveElement} className="svg-icon-react-icons opacity-100" size={26} color='#000' />
                  ) : (
                    <>
                      <MdDelete onClick={() => removeElement(index)} className={`svg-icon-react-icons ${actives[index] === 1 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#666' />
                      <GiHeartWings onClick={() => resurrectElement(index)} className={`svg-icon-react-icons ${actives[index] === 0 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#000' />
                      <MdEdit onClick={() => editElement(index)} className="svg-icon-react-icons opacity-100" size={26} color='#000' />
                    </>
                  )}
                </div>
              </div>
            ))}
            <input
              type="text"
              value={newElement}
              onChange={(e) => setNewElement(e.target.value)}
              placeholder="Введите название:описание"
              className="border p-2 rounded w-full mt-4"
            />
            <button onClick={addElement} className='p-2 rounded w-full bg-gradient-to-r from-gray-100 via-green-500 to-gray-100 text-white mt-2'><h1 className='text-center'>Добавить элемент</h1></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;