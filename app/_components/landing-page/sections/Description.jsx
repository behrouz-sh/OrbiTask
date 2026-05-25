import Image from 'next/image';
import clsx from 'clsx';

import HeaderSection from './HeaderSection';

export default function Description({ className, children }) {
  return (
    <section
      className={clsx(
        'container flex items-center justify-between gap-x-3 md:gap-x-13',
        className
      )}>
      {children}
    </section>
  );
}
function Img({ src }) {
  return (
    <Image
      className='shadow-blue hidden h-auto w-80 rounded-xl md:block lg:w-120 xl:w-170'
      src={src}
      alt='image'
      width={620}
      height={430}
      placeholder='blur'
    />
  );
}
Description.Image = Img;
Description.Title = HeaderSection.Title;
Description.Description = HeaderSection.Description;
