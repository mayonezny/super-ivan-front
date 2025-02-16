import axios from 'axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: 'ID не указан' }, { status: 400 });
  }
  try {
    const response = await axios.delete(`${outerApi}/posts/deletepost/${id}`); // Это твой сервер Nest.js
    if (!response.ok) {
      return NextResponse.json({ error: 'Ошибка при удалении поста' }, { status: response.status });
    }

    // Возвращаем данные, полученные от сервера Nest.js
    return NextResponse.json({ message: 'Пост удалён' }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
