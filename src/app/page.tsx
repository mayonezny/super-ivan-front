
import ClickMenu from './client-components/main-page/ClickMenu';
export default function MainPage() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)] font-bold">
      <h1 className='text-4xl'>Здарова Ишак!</h1>
      <ClickMenu />

    </div>
  );
}
