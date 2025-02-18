import axios from 'axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const post = await req.json();

  try {
    const response = await axios.post(`${outerApi}/posts/addpost`, post); // Это твой сервер Nest.js
    // if (!response.ok) {
    //   return NextResponse.json({ error: 'Ошибка при добавлении поста' }, { status: response.status });
    // }

    // Возвращаем данные, полученные от сервера Nest.js
    console.log(response.data);
    return NextResponse.json(response.data, { status: 201});
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
