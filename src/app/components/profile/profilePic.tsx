import clsx from 'clsx';
import Image from 'next/image';

const ProfilePic = ({ size, className }: { size: number, className: string }) => {

  return (
    <div className={clsx('flex rounded-xl', className)}>
      <Image src='/N_esZZ594Wo.jpg' alt='' className='rounded-full' width={size} height={size}/>
    </div>
  );
};
export default ProfilePic;
