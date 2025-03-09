import Group from '../../../../public/icons/group';
import ProfilePic from './profilePic';

const ProfileCard = () => {

  return (
    <div className="flex flex-col w-9/10 items-center bg-white p-6 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]  h-[600px]">
      <div className='flex gap-3 items-center'>
        <ProfilePic/>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>Иван Запарьянц</h1>
          <div className='flex items-center gap-1'>
            <Group/>
            <h1>ВПР32</h1>
          </div>

        </div>
      </div>

    </div>
  );
};
export default ProfileCard;
