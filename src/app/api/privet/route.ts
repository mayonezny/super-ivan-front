
// app/api/privet/route.ts
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Отправляем запрос на сервер Nest.js (местный сервер)
    const response = await axios.get('http://localhost:80/api'); // Это твой сервер Nest.js

    // Возвращаем данные, полученные от сервера Nest.js
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
