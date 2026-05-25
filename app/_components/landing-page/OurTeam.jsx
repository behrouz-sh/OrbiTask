import clsx from 'clsx';
import Image from 'next/image';

export default function OurTeam({
  role = '',
  image,
  className,
}) {
  return (
    <div
      className={clsx(
        'group relative h-[30dvh] w-2/3 shrink-0 overflow-hidden rounded-4xl object-cover object-center **:transition-opacity **:duration-75 md:h-50 md:w-30 lg:h-91.5 lg:w-38.5 lg:rounded-full',
        className
      )}>
      <div className='absolute inset-0 bg-[#0C0F19]/44 opacity-80 group-hover:opacity-100 md:opacity-0'></div>
      <Image
        src={image}
        className='size-full object-cover object-center'
      />
      <span className='text-title-md absolute right-0 bottom-1 left-0 m-auto inline size-fit! text-white select-none group-hover:opacity-100 md:inset-0 md:-rotate-90 md:opacity-0 lg:left-11 lg:text-nowrap'>
        {role}
      </span>
    </div>
  );
}
