import axios from 'axios';
import { authInterface } from 'imp/store/AuthStore';
import api from 'imp/utils/axios/axios';
import { outerApi } from 'imp/utils/constants/endpoints';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password }: authInterface = await req.json() as authInterface;
  console.log('l', email, 'p', password);
  try {
    const nestresponse = await axios.post(`${outerApi}/auth/register`, { email, password }, { withCredentials: true }); // Это твой сервер Nest.js
    const setCookieHeader = nestresponse.headers['set-cookie'];
    // Например: ["refreshToken=abc123; Path=/; HttpOnly; ..."]
    const data = nestresponse.data;
    const response = NextResponse.json(data, { status: nestresponse.status });

    // 3. Если он есть, пробрасываем его в ответ Next
    if (setCookieHeader) {
      console.log(setCookieHeader);
      response.headers.set('Set-Cookie', setCookieHeader[0] ?? setCookieHeader);
    }
    return response;

  } catch (error) {
    console.error('Skibidi dop dop dop daba dop, dap daba dop', error);

    // В случае ошибки возвращаем статус 500 с сообщением
    return NextResponse.json({ message: 'Failed to fetch data from Nest.js' }, { status: 500 });
  }
}
