import clsx from 'clsx';
import Button from './button';
import Link from 'next/link';
import React from 'react';
interface NavButtonProps{
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavButton = ({ href, children, className }: NavButtonProps) => {

  return (
    <Button as={Link} href={href} className={clsx(className, 'hover:text-cyan-600')}>{children}</Button>
  );
};
export default NavButton;
