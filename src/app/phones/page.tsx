'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState, AppDispatch } from '../../store';
import { addPhone, removePhone, Phone } from '../../store/phoneSlice';

export default function PhonesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const phones = useSelector((s: RootState) => s.phones.list);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !description.trim()) return;
    const newPhone: Phone = { id: uuidv4(), name, description };
    dispatch(addPhone(newPhone));
    setName('');
    setDescription('');
  };

  return (
    <div className="p-8 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Список телефонов</h1>

      <div className="space-y-2">
        {phones.map(p => (
          <div key={p.id} className="flex justify-between p-2 border rounded">
            <div>
              <strong>{p.name}:</strong> {p.description}
            </div>
            <button
              onClick={() => dispatch(removePhone(p.id))}
              className="text-red-500 hover:underline"
            >
              Удалить
            </button>
          </div>
        ))}
        {phones.length === 0 && <p>Пусто. Добавьте телефон ниже.</p>}
      </div>

      <div className="space-y-2">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Имя"
          className="w-full p-2 border rounded"
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Описание"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Добавить телефон
        </button>
      </div>
    </div>
  );
}
