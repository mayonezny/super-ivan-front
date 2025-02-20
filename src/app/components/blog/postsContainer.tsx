'use client';
import { observer } from 'mobx-react';
import Card from './postCard';
import postsStore from 'imp/store/PostsStore';
import { useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
type BlogMenuProps = {
  type: string;
  className?: string;
}
const BlogMenu = observer(({ type, className } : BlogMenuProps) => {
  useEffect(() => {
    const fetchData = async () => {
      if (type === 'all') {
        try{
          await postsStore.fetchPosts();
        } catch(err){
          console.error('Ошибка при получении постов!', err);
        }
      } else if (type === 'user') {
        await postsStore.fetchPosts();
      } else {
        console.error('че'); // сюда добавим получение юзернейма из куки например
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [type]);

  return (
    <div className={clsx('grid grid-cols-3 gap-10 px-5 p-2 text-xl justify-items-center', className)}>
      {postsStore.posts.length === 0 ?
        <div className='col-span-3 text-center'>Плаки-плаки! Здесь ничего нет!</div> :
        postsStore.posts.map((post) => (
          <Card key={post.id} id={post.id} href={`posts/${post.href}`} pic={post.pic} title={post.title} author={post.author} date={post.date} picFilename={post.picFilename} edit={type === 'user' ? true : false} as={Link}/>
        ))}
    </div>
  );
});

export default BlogMenu;
