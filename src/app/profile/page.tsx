import Header from '../components/header/header';
import ProfileCard from '../components/profile/profileCard';
import ProfileLayout from '../layouts/profileLayout';

const ProfilePage = () => {

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-inter)] bg-gray-100">
      <Header/>
      <ProfileLayout className='flex flex-col'>
        <div className='flex flex-col items-center'>
          <ProfileCard/>
        </div>

      </ProfileLayout>
    </div>
  );
};
export default ProfilePage;
