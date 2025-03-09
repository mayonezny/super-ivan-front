import ProfileCard from './profileCard';

const ProfileInfoBlock = () => {

  return (
    <div className="flex flex-col w-full bg-white p-6 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='flex justify-between'>
        <ProfileCard/>
        <div className='flex flex-col w-[30%] items-center leading-[1.36]'>
          <textarea className='resize-none h-full focus:outline-none overflow-clip whitespace-pre-wrap' readOnly value={'"Люблю жоска сосать.\nОбижаюсь на 04... Девушки не обессудьте, но я по мужикам."'}></textarea>
        </div>
      </div>

    </div>
  );
};
export default ProfileInfoBlock;
