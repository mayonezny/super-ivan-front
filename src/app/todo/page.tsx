'use client';

import { createContext, useContext, useState, ChangeEvent, FC, ReactNode } from 'react';
import Header from '../components/header/header';

// Тип задачи
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Контекст и его интерфейс
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Провайдер, оборачивающий приложение
const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem('todo-storage');
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      // если записан просто массив
      if (Array.isArray(parsed)) return parsed;
      // если объект от zustand-persist
      if (parsed.state && Array.isArray(parsed.state.todos)) {
        return parsed.state.todos;
      }
      return [];
    } catch {
      return [];
    }
  });

  // Синхронизируем с localStorage
  const syncStorage = (items: Todo[]) => {
    setTodos(items);
    if (typeof window !== 'undefined') {
      localStorage.setItem('todo-storage', JSON.stringify(items));
    }
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    syncStorage([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    syncStorage(updated);
  };

  const removeTodo = (id: number) => {
    const filtered = todos.filter(todo => todo.id !== id);
    syncStorage(filtered);
  };

  return <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>{children}</TodoContext.Provider>;
};

// Хук для доступа к контексту
const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used within TodoProvider');
  return context;
};

// Страница todo
export default function TodoPage() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

// Компонент со списком и формой
function TodoApp() {
  const [input, setInput] = useState('');
  const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

  const handleAdd = () => {
    const text = input.trim();
    if (text) {
      addTodo(text);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-50">
      <Header />
      <h1 className="text-2xl font-bold mb-4">TODO на Context API</h1>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            placeholder="Новая задача"
            className="flex-grow border border-gray-300 p-2 rounded-l"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600"
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
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              >
                {todo.text}
              </span>
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
