
import ClickMenu from './client-components/main-page/ClickMenu';
import Card from './components/blog/blogCard';
import BlogMenu from './components/blog/blogMenu';
import Header from './components/header/header';
import MainPageLayout from './layouts/mainPageLayout';
export default function MainPage() {

  return (
    <div className="flex flex-col gap-10 items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <MainPageLayout>
        <h1 className='text-4xl self-start mb-4'>Здарова Ишак! Смари!</h1>
        <BlogMenu>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </BlogMenu>
      </MainPageLayout>

      <ClickMenu />

    </div>
  );
}
