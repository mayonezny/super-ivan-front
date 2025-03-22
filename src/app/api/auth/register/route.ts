import { authInterface } from 'imp/store/AuthStore';
import api from 'imp/utils/axios/axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password }: authInterface = await req.json();
  console.log('l', email, 'p', password);
  try {
    const response = await api.post(`${outerApi}/auth/register`, { email, password }); // Это твой сервер Nest.js
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Skibidi dop dop dop daba dop, dap daba dop', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
