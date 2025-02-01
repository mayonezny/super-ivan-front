
import ClickMenu from './client-components/main-page/ClickMenu';
import Card from './components/blog/blogCard';
import BlogMenu from './components/blog/blogMenu';
import Header from './components/header/header';
export default function MainPage() {

  return (
    <div className="flex flex-col gap-10 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <h1 className='text-4xl self-start ml-32'>Здарова Ишак! Смари!</h1>
      <BlogMenu>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </BlogMenu>

      <ClickMenu />

    </div>
  );
}
