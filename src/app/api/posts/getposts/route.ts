
// app/api/getposts/route.ts
import axios from 'axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const keyword = url.searchParams.get('keyword') || undefined;
    // Отправляем запрос на сервер Nest.js (местный сервер)

    const response = await axios.get(`${outerApi}/posts/getposts${keyword ? `?keyword=${keyword}` : ''}`); // Это твой сервер Nest.js

    // Возвращаем данные, полученные от сервера Nest.js
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
