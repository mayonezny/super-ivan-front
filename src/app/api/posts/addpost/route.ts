import axios from 'axios';
import { Post } from 'imp/app/page';
import api from 'imp/utils/axios/axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const post: Post = await req.json() as Post;

  try {
    const response = await api.post(`${outerApi}/posts/addpost`, post, { withCredentials: true }); // Это твой сервер Nest.js
    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    console.error('Error fetching data from Nest.js server:', error);
    const status = error.status || 404;
    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: status });
  }
}
