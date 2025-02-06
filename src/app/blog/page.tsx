import Filter from '../../../public/icons/filter';
import Pencil from '../../../public/icons/pencil';
import Plus from '../../../public/icons/plus';
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
            <div className='flex justify-between items-center w-24 p-2 pr-3 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-3xl bg-white'>
              <Plus/>
              <Filter/>
            </div>
            <SearchMenu/>
          </div>

        </div>
        <div className='w-full h-screen shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl bg-white'></div>
      </MainLayout>
    </div>
  );
};
export default BlogPage;
