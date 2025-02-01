
'use client';

import Image from 'next/image';

export default function CheeseMadnessIMG({ ...props }) {
  const {
    click,
  } = props;
  return (
    <Image
      src="/ВАУ-CHEESE-MADNESS.svg"
      width={600}
      height={600}
      alt='chess madness'
      onClick={click}
      className='cursor-pointer' />
  );
}
