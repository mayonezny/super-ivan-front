import clsx from 'clsx';
import { ReactNode } from 'react';
type LayoutProps = {
  children: ReactNode;
  className?: string;
}
const MainLayout = ({ children, className }: LayoutProps ) => {

  return (

    <div className={clsx('w-9/10', className)}>
      {children}
    </div>
  );
};
export default MainLayout;
