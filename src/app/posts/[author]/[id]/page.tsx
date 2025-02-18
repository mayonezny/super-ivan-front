'use client';
import postsStore from 'imp/store/PostsStore';
import Header from '../../../components/header/header';
import MainLayout from '../../../layouts/mainLayout';
import { observer } from 'mobx-react';
import { use, useEffect } from 'react';
import { format } from 'date-fns-tz';
import { ru } from 'date-fns/locale';

const PostPage = observer(({ params }: { params: Promise<{ author: string, id: number }> }) => {
  useEffect(() => {
    if (postsStore.posts.length === 0) {
      postsStore.fetchPosts(); // Загружаем посты при заходе на страницу
    }
  }, []);
  const { id } = use(params);
  console.log('ID из params:', id, typeof id);
  const post = postsStore.findPostById(Number(id));
  console.log(post?.author);
  //   console.log(postsStore.posts);
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-50">
      <Header/>
      <MainLayout className='flex flex-col gap-5'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-between'>
            <h1 className='text-4xl font-extrabold font-[family-name:var(--font-roboto-c)]'>{post?.title}</h1>
            <h1 className='text-4xl font-[family-name:var(--font-roboto-c)]'>{`${post?.author}, ${format(post.date, 'dd MMMM, HH:mm', { locale: ru })}`}</h1>
          </div>
          <h1 className='bg-[#f0f0f0] text-3xl rounded-lg w-full h-full whitespace-pre-wrap p-3 font-[family-name:var(--font-roboto-c)] resize-none text-clip focus:outline-none'>{post?.content}</h1>
        </div>

      </MainLayout>
    </div>
  );
});
export default PostPage;
