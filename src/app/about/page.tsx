'use client';
// import { useState, useEffect } from 'react';
// import Header from '../components/header/header';
// import { MdDelete, MdEdit } from 'react-icons/md';
// import { GiHeartWings } from 'react-icons/gi';

// const AboutPage = () => {
//   const tv = {
//     brand: 'Samsung',
//     model: 'QLED-55',
//     matrix: 'VA',
//     screenSize: '55 дюймов',
//     serialNumber: '1234567890',
//   };

//   const randword = ['Перфоратор', 'Кабачки', 'Телефон', 'Вивобук', 'Буровая установка', 'Синтезатор Roland D-50', 'Стиральная машина Asus', 'Окно с теплоизоляцией', 'Иван', 'Пасхолко'];
//   const [mas, setMas] = useState([
//     { label: 'Матрица', description: tv.matrix },
//     { label: 'Диагональ экрана', description: tv.screenSize },
//     { label: 'Серийный номер', description: tv.serialNumber },
//   ]);
//   const [actives, setActives] = useState([1, 1, 1]);
//   const [newElement, setNewElement] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const savedMas = localStorage.getItem('mas');
//     const savedActives = localStorage.getItem('actives');
//     if (savedMas && savedActives) {
//       setMas(JSON.parse(savedMas));
//       setActives(JSON.parse(savedActives));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('mas', JSON.stringify(mas));
//     localStorage.setItem('actives', JSON.stringify(actives));
//   }, [mas, actives]);

//   const addElement = () => {
//     const [label, description] = newElement.split(':');
//     if (label.trim() !== '' && description.trim() !== '') {
//       setMas([...mas, { label: label.trim(), description: description.trim() }]);
//       setActives([...actives, 1]);
//       setNewElement('');
//     }
//   };

//   const removeElement = (index) => {
//     const newActives = actives.map((element, i) => {
//       if (i === index) {
//         return 0;
//       } else {
//         return element;
//       }
//     });
//     setActives(newActives);
//   };

//   const resurrectElement = (index) => {
//     const newActives = actives.map((element, i) => {
//       if (i === index) {
//         return 1;
//       } else {
//         return element;
//       }
//     });
//     setActives(newActives);
//   };

//   const editElement = (index) => {
//     setEditIndex(index);
//     setNewElement(`${mas[index].label}:${mas[index].description}`);
//   };

//   const saveElement = () => {
//     const [label, description] = newElement.split(':');
//     if (label.trim() !== '' && description.trim() !== '') {
//       const newMas = mas.map((element, i) => {
//         if (i === editIndex) {
//           return { label: label.trim(), description: description.trim() };
//         } else {
//           return element;
//         }
//       });
//       setMas(newMas);
//       setEditIndex(null);
//       setNewElement('');
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)]">
//       <Header />
//       <div className='flex'>
//         <div className="border p-4 rounded-lg shadow-md h-fit">
//           <h2 className="text-xl font-bold mb-4">Телевизор {tv.brand} {tv.model}</h2>
//           <div className="space-y-2">
//             {mas.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex p-2 justify-between rounded ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${actives[index] === 0 ? 'opacity-50' : ''}`}
//               >
//                 {editIndex === index ? (
//                   <input
//                     type="text"
//                     value={newElement}
//                     onChange={(e) => setNewElement(e.target.value)}
//                     className="border p-1 rounded"
//                   />
//                 ) : (
//                   <div><strong>{item.label}:</strong> {item.description}</div>
//                 )}
//                 <div className='flex'>
//                   {editIndex === index ? (
//                     <MdEdit onClick={saveElement} className="svg-icon-react-icons opacity-100" size={26} color='#000' />
//                   ) : (
//                     <>
//                       <MdDelete onClick={() => removeElement(index)} className={`svg-icon-react-icons ${actives[index] === 1 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#666' />
//                       <GiHeartWings onClick={() => resurrectElement(index)} className={`svg-icon-react-icons ${actives[index] === 0 ? 'opacity-100' : 'opacity-0'}`} size={26} color='#000' />
//                       <MdEdit onClick={() => editElement(index)} className="svg-icon-react-icons opacity-100" size={26} color='#000' />
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//             <input
//               type="text"
//               value={newElement}
//               onChange={(e) => setNewElement(e.target.value)}
//               placeholder="Введите название:описание"
//               className="border p-2 rounded w-full mt-4"
//             />
//             <button onClick={addElement} className='p-2 rounded w-full bg-gradient-to-r from-gray-100 via-green-500 to-gray-100 text-white mt-2'><h1 className='text-center'>Добавить элемент</h1></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

import React, { useState, useRef } from "react";

interface PatternLockProps {
  value: string;
  onChange?: (val: string) => void;
}

const DOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const POSITIONS: Record<number, [number, number]> = {
  1: [0, 0], 2: [1, 0], 3: [2, 0],
  4: [0, 1], 5: [1, 1], 6: [2, 1],
  7: [0, 2], 8: [1, 2], 9: [2, 2],
};

export const PatternLock = ({ value, onChange }: PatternLockProps) => {
  const [pattern, setPattern] = useState<string[]>(value?.split("") || []);
  const [isDrawing, setIsDrawing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setPattern([]);
    setIsDrawing(true);
  };

  const handleEnd = () => {
    setIsDrawing(false);
    onChange?.(pattern.join(""));
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const touch = "touches" in e ? e.touches[0] : e;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const col = Math.floor((x / rect.width) * 3);
    const row = Math.floor((y / rect.height) * 3);
    const index = row * 3 + col + 1;

    if (index >= 1 && index <= 9 && !pattern.includes(index.toString())) {
      const newPattern = [...pattern, index.toString()];
      setPattern(newPattern);
    }
  };

  const getDotCenter = (num: number): [number, number] => {
    const [col, row] = POSITIONS[num];
    const spacing = 100 / 3;
    return [(col + 0.5) * spacing, (row + 0.5) * spacing];
  };

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < pattern.length - 1; i++) {
      const from = getDotCenter(Number(pattern[i]));
      const to = getDotCenter(Number(pattern[i + 1]));
      lines.push(
        <line
          key={i}
          x1={`${from[0]}%`}
          y1={`${from[1]}%`}
          x2={`${to[0]}%`}
          y2={`${to[1]}%`}
          stroke="#3b82f6"
          strokeWidth={4}
          strokeLinecap="round"
        />
      );
    }
    return lines;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-48 h-48 select-none"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseMove={handleMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchMove={handleMove}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {renderLines()}
      </svg>
      <div className="grid grid-cols-3 gap-6 w-full h-full bg-gray-100 rounded-lg p-4">
        {DOTS.map((num) => (
          <div
            key={num}
            className={`w-6 h-6 mx-auto my-auto rounded-full border-2 transition-colors duration-150 ${pattern.includes(num.toString()) ? "bg-blue-500 border-blue-500" : "border-gray-400"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [pattern1, setPattern1] = useState("");
  const [pattern2, setPattern2] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = () => {
    if (!username.trim()) {
      setError("Введите имя пользователя");
      return;
    }

    if (pattern1.length < 4) {
      setError("Паттерн должен состоять минимум из 4 точек");
      return;
    }

    if (new Set(pattern1).size !== pattern1.length) {
      setError("Паттерн не должен содержать повторяющихся точек");
      return;
    }

    if (pattern1 !== pattern2) {
      setError("Паттерны не совпадают");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, pattern: pattern1 }));
    setError("");
    alert("Регистрация успешна!");
  };

  return (
    <div className="border border-gray-300 p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Регистрация</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium">Имя пользователя:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-3">
        <h3 className="font-medium">Введите графический ключ:</h3>
        <PatternLock value={pattern1} onChange={setPattern1} />
      </div>

      <div className="mb-3">
        <h3 className="font-medium">Подтвердите графический ключ:</h3>
        <PatternLock value={pattern2} onChange={setPattern2} />
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleRegistration}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export const Login = () => {
  const [username, setUsername] = useState("");
  const [pattern, setPattern] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogin = () => {
    if (disabled) return;

    if (username !== storedUser.username) {
      setError("Имя пользователя не совпадает");
      return;
    }

    if (pattern !== storedUser.pattern) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(`Графический ключ неверный (${newAttempts} попытка)`);
      if (newAttempts >= 3) {
        setDisabled(true);
        setError("Попытки исчерпаны. Поле ввода заблокировано.");
      }
      return;
    }

    setError("");
    alert("Логин успешный!");
  };

  return (
    <div className="border border-gray-300 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Логин</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium">Имя пользователя:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={disabled}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-3">
        <h3 className="font-medium">Введите графический ключ:</h3>
        <PatternLock value={pattern} onChange={setPattern} />
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleLogin}
        disabled={disabled}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Войти
      </button>
    </div>
  );
};

const AboutPage = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setMode("login")}
          className={`px-4 py-2 rounded ${mode === "login" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Логин
        </button>
        <button
          onClick={() => setMode("register")}
          className={`px-4 py-2 rounded ${mode === "register" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Регистрация
        </button>
      </div>
      {mode === "login" ? <Login /> : <Registration />}
    </div>
  );
};

export default AboutPage;
