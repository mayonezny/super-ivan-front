import { HiMiniIdentification } from 'react-icons/hi2';
import { FaUserGroup } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { ImBubble } from 'react-icons/im';
const ProfileNavbar = () => {

  return (
    <div className="flex w-fit h-fit items-center gap-5 justify-center bg-white px-3 p-2 shadow-[0px_0px_3px_rgba(0,0,0,0.2)] rounded-xl font-[family-name:var(--font-inter)]">
      <div className='svg-icon'>
        <HiMiniIdentification title='Профиль' size={24} color='#666'/>
      </div>
      <div className='svg-icon'>
        <FaUserGroup title='Друзья' size={22} color='#666'/>
      </div>
      <div className='svg-icon'>
        <ImStatsDots title='Статистика' size={20} color='#666'/>
      </div>
      <div className='svg-icon'>
        <ImBubble title='Чаты' size={20} color='#666'/>
      </div>

    </div>
  );
};
export default ProfileNavbar;
