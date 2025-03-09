import Header from '../components/header/header';
import ProfileInfoBlock from '../components/profile/profileInfoBlock';
import ProfileNavbar from '../components/profile/profileNavbar';
import ProfilePreferencesNavbar from '../components/profile/profilePreferencesNavbar';
import ProfileLayout from '../layouts/profileLayout';

const ProfilePage = () => {

  return (
    <div className="z-0 flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-100">
      <Header/>
      <ProfileLayout className='z-10 flex justify-center items-center gap-5'>
        <ProfilePreferencesNavbar disabled/>
        <div className='flex flex-col items-center gap-5'>
          <ProfileNavbar/>
          <ProfileInfoBlock/>
        </div>
        <ProfilePreferencesNavbar className='mt-[18px] z-50'/>

      </ProfileLayout>
    </div>
  );
};
export default ProfilePage;
