
import ModalContainer from '../components/blog/modalContainer';
import BlogMenu from '../components/blog/postsContainer';
import Header from '../components/header/header';
import SearchMenu from '../components/misc/searchMenu';
import MainLayout from '../layouts/mainLayout';

const BlogPage = () => {

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <MainLayout className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <h1 className='text-4xl'>Мои посты</h1>
          <div className='flex gap-5'>
            <ModalContainer/>
            <SearchMenu type='blog'/>
          </div>

        </div>
        <BlogMenu type='user' className='w-full p-7 gap-5 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl bg-white'/>
      </MainLayout>
    </div>
  );
};
export default BlogPage;
