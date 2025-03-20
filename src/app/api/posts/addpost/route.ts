import axios from 'axios';
import { Post } from 'imp/app/page';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const post: Post = await req.json() as Post;

  try {
    const response = await axios.post(`${outerApi}/posts/addpost`, post); // Это твой сервер Nest.js
    return NextResponse.json(response.data, { status: 201});
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
