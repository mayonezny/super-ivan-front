import clsx from 'clsx';
const MainLayout = ({ children, ...props }) => {
  const {
    className,
  } = props;
  return (

    <div className={clsx('w-9/10', className)}>
      {children}
    </div>
  );
};
export default MainLayout;
