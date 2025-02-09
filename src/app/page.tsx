
import axios from 'axios';
import ClickMenu from './client-components/main-page/ClickMenu';
import Card from './components/blog/postCard';
import BlogMenu from './components/blog/postsContainer';
import Header from './components/header/header';
import MainLayout from './layouts/mainLayout';
import SearchMenu from './components/misc/searchMenu';

export interface Post {
  id: number;
  href: string;
  pic: string;
  title: string;
  author: string;
  date: Date;
}

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <MainLayout>
        <div className='flex justify-between'>
          <h1 className='text-4xl self-start mb-4'>Здарова Ишак! Смари!</h1>
          <SearchMenu type='main'/>
        </div>

        <BlogMenu type='all'/>
      </MainLayout>

      <ClickMenu />

    </div>
  );
}
