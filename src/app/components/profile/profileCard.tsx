import Group from '../../../../public/icons/group';
import ProfilePic from './profilePic';
import { MdCalendarMonth } from 'react-icons/md';

const ProfileCard = () => {

  return (
    <div className='flex gap-3 items-center'>
      <ProfilePic size={128}/>
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold'>Иван Запарьянц</h1>
        <div className='flex justify-around gap-2'>
          <div className='flex items-center gap-1'>
            <Group/>
            <h1>ВПР32</h1>
          </div>
          <div className='flex items-center gap-1'>
            <MdCalendarMonth size={20} color='#666'/>
            <h1>11.09</h1>
          </div>
        </div>

      </div>
    </div>
  );
};
export default ProfileCard;
