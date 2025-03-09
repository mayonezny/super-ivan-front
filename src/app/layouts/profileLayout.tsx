import clsx from 'clsx';
import { LayoutProps } from './mainLayout';

const ProfileLayout = ({ children, className }: LayoutProps ) => {

  return (

    <div className={clsx('w-5/12', className)}>
      {children}
    </div>
  );
};
export default ProfileLayout;
