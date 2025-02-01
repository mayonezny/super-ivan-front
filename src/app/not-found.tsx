// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem' }}>Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <Link href="/" className='text-cyan-100'>
        Вернуться на главную
      </Link>
    </div>
  );
}
