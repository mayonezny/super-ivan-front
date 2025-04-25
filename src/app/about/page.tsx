'use client';

import { observer } from 'mobx-react-lite';
import { tvStore } from '../../store/TVStore';
import Header from '../components/header/header';
import { MdDelete, MdEdit } from 'react-icons/md';
import { GiHeartWings } from 'react-icons/gi';

const AboutPage = observer(() => {
  const { mas, actives, newElement, editIndex } = tvStore;
  const tv = {
    brand: 'Samsung',
    model: 'QLED-55',
  };

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen font-[var(--font-inter)]">
      <Header />
      <div className="flex">
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
                    onChange={(e) => tvStore.setNewElement(e.target.value)}
                    className="border p-1 rounded"
                  />
                ) : (
                  <div><strong>{item.label}:</strong> {item.description}</div>
                )}
                <div className="flex">
                  {editIndex === index ? (
                    <MdEdit onClick={() => tvStore.saveElement()} className="svg-icon-react-icons opacity-100" size={26} color="#000" />
                  ) : (
                    <>
                      <MdDelete onClick={() => tvStore.removeElement(index)} className={`svg-icon-react-icons ${actives[index] === 1 ? 'opacity-100' : 'opacity-0'}`} size={26} color="#666" />
                      <GiHeartWings onClick={() => tvStore.resurrectElement(index)} className={`svg-icon-react-icons ${actives[index] === 0 ? 'opacity-100' : 'opacity-0'}`} size={26} color="#000" />
                      <MdEdit onClick={() => tvStore.editElement(index)} className="svg-icon-react-icons opacity-100" size={26} color="#000" />
                    </>
                  )}
                </div>
              </div>
            ))}
            <input
              type="text"
              value={newElement}
              onChange={(e) => tvStore.setNewElement(e.target.value)}
              placeholder="Введите название:описание"
              className="border p-2 rounded w-full mt-4"
            />
            <button onClick={() => tvStore.addElement()} className="p-2 rounded w-full bg-gradient-to-r from-gray-100 via-green-500 to-gray-100 text-white mt-2">
              <h1 className="text-center">Добавить элемент</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutPage;
