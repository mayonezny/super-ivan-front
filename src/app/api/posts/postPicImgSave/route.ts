/* eslint-disable no-magic-numbers */
import axios from 'axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';
interface urlUploadInterface {
  url: string;
  filename: string;
}
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  try {
    const response = await axios.post<urlUploadInterface>(`${outerApi}/posts/postPicImgSave`, formData, {
      headers:{
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status !== 201) {
      return NextResponse.json({ error: 'Ошибка при отправке данных на сервер' }, { status: response.status });
    }
    // Возвращаем данные, полученные от сервера Nest.js
    return NextResponse.json({ url: response.data.url, filename: response.data.filename }, { status: 201 });
  } catch (error) {
    console.error('Error fetching data from Nest.js server:', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
