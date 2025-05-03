
import BlogMenu from './components/blog/postsContainer';
import Header from './components/header/header';
import MainLayout from './layouts/mainLayout';
import SearchMenu from './components/misc/searchMenu';
import Footer from './components/footer/footer';

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

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-100">
      <Header/>
      <MainLayout>
        <div className='flex justify-between'>
          <h1 className='text-4xl self-start mb-4'>Добро пожаловать! Взгляните на свежие посты!</h1>
          <SearchMenu type='main'/>
        </div>

        <BlogMenu type='all'/>
      </MainLayout>
      <Footer/>
    </div>
  );
}
