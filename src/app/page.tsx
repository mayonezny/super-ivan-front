
import axios from 'axios';
import ClickMenu from './client-components/main-page/ClickMenu';
import Card from './components/blog/blogCard';
import BlogMenu from './components/blog/blogMenu';
import Header from './components/header/header';
import MainPageLayout from './layouts/mainPageLayout';

export interface Post {
  id: number;
  href: string;
  pic: string;
  title: string;
  author: string;
  date: Date;
}

export async function getPosts(): Promise<Post[]> {
  const response = await axios.get('http://localhost:3000/api/getposts', {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
  const posts: Post[] = await response.data;

  return posts;
}

export default async function MainPage() {
  const posts: Post[] = await getPosts();
  return (
    <div className="flex flex-col gap-10 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <MainPageLayout>
        <h1 className='text-4xl self-start mb-4'>Здарова Ишак! Смари!</h1>
        <BlogMenu>
          {posts.map((post) => (
            <Card key={post.id} href={post.href} pic={post.pic} title={post.title} author={post.author} date={post.date}/>
          ))}
        </BlogMenu>
      </MainPageLayout>

      <ClickMenu />

    </div>
  );
}
