import Image from 'next/image';

const ProfilePic = ({ size }: { size: number }) => {

  return (
    <div className="flex rounded-xl">
      <Image src='/N_esZZ594Wo.jpg' alt='' className='rounded-full' width={size} height={size}/>
    </div>
  );
};
export default ProfilePic;
