
export interface Post {
    id?: number;
    href?: string;
    pic: string;
    title: string;
    author: string;
    date?: Date;
    content?: string;
    picFilename?: string;
  }
export interface User{
    email: string;
    accessToken: string;
    error?: any;
}
