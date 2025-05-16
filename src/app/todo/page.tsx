/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useState } from 'react';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

function getStorage(): StateStorage {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage;
  }
  // no-op реализация для SSR
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
}

// Zustand store with persistence
const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (text) => {
        const newTodo: Todo = { id: Date.now(), text, completed: false };
        set({ todos: [...get().todos, newTodo] });
      },
      toggleTodo: (id) => {
        set({
          todos: get().todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        });
      },
      removeTodo: (id) => {
        set({ todos: get().todos.filter(todo => todo.id !== id) });
      },
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(getStorage),
    },
  ),
);

export default function TodoPage() {
  const [input, setInput] = useState('');
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  const handleAdd = () => {
    const text = input.trim();
    if (text) {
      addTodo(text);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">TODO на Zustand</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Новая задача"
            className="flex-grow border border-gray-300 p-2 rounded-l"
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Добавить
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white p-2 rounded shadow"
            >
              <div
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              >
                {todo.text}
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
