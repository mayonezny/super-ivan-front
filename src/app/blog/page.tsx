
import Filter from '../../../public/icons/filter';
import Plus from '../../../public/icons/plus';
import ModalContainer from '../components/modal/modalContainer';
import BlogMenu from '../components/blog/postsContainer';
import Header from '../components/header/header';
import SearchMenu from '../components/misc/searchMenu';
import AddPostModal from '../components/modal/addPostModal';
import MainLayout from '../layouts/mainLayout';
import PostFilter from '../components/postFilter/postFilter';

const BlogPage = () => {

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-100">
      <Header/>
      <MainLayout className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <h1 className='text-4xl'>Мои посты</h1>
          <div className='flex gap-5'>
            <ModalContainer ModalTrigger={Plus} Modal={AddPostModal} className='flex justify-between items-center w-24 p-2 pr-3 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-3xl bg-white'>
              <Filter/>
            </ModalContainer>
            <SearchMenu type='blog'/>

          </div>

        </div>
        <BlogMenu type='user' className='w-full p-7 gap-5 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl bg-white'/>
        <PostFilter/>
      </MainLayout>
    </div>
  );
};
export default BlogPage;
