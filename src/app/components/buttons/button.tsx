import clsx from 'clsx';

type ButtonProps<T extends React.ElementType = 'button'> = {
    as?: T;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
  } & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType = 'button'>({
  as,
  disabled,
  children,
  className,
  ...props
}:ButtonProps<T>) => {
  const Component = as || 'button';
  return (
    <Component

      className={clsx(
        'px-4 py-2 rounded transition',
        disabled && 'opacity-50',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};
export default Button;
