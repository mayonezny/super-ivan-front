import axios from 'axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = params;
  if (!filename) {
    return NextResponse.json({ error: 'Filename не указан' }, { status: 400 });
  }
  try {
    const response = await axios.delete(`${outerApi}/posts/postPicImgDelete/${filename}`); // Это твой сервер Nest.js

    // Возвращаем данные, полученные от сервера Nest.js
    return NextResponse.json({ message: 'Фотография удалена' }, { status: response.status });
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
