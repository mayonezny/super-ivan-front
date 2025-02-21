import axios from 'axios';
import { updatableData } from 'imp/app/components/blog/postCard';
import { Post } from 'imp/app/page';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const updatedPost = await req.json() as updatableData;
  //console.log(updatedPost);
  if (!id) {
    return NextResponse.json({ error: 'ID не указан' }, { status: 400 });
  }
  try {
    const response = await axios.put<[ any, Post[] ]>(`${outerApi}/posts/updatepost/${id}`, updatedPost); // Это твой сервер Nest.js
    // Возвращаем данные, полученные от сервера Nest.js
    const [{ title, content }] = response.data[1];
    console.log(title);
    console.log(content);
    return NextResponse.json({ title: title, content: content }, { status: response.status });
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
