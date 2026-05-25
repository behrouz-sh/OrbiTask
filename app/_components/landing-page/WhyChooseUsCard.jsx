import clsx from 'clsx';
import Image from 'next/image';

export default function WhyChooseUsCard({
  // sm - lg
  size = 'sm',
  title,
  description,
  image,
  icon,
  className,
}) {
  switch (size) {
    case 'lg':
      return (
        <div
          className={clsx(
            'shadow-medium relative flex items-center justify-center overflow-hidden rounded-2xl p-8 text-center lg:h-80 lg:justify-normal lg:p-11.5 lg:text-left',
            className
          )}>
          <div className='bg-primary-500/24 absolute -top-1/2 -right-1/12 h-66.5 w-69.5 rounded-full blur-[140px]'></div>
          <Image
            src={image}
            alt='X'
            className='border-primary-50 absolute right-0 bottom-0 left-0 -z-1 w-full -rotate-20 rounded-2xl border-10 opacity-10 lg:-bottom-1/5 lg:left-auto lg:w-75 lg:opacity-60 xl:opacity-100'
          />
          <div className='w-95.75 space-y-6'>
            <h4 className='text-title-md'>{title}</h4>
            <p className='text-body-md text-neutral-600'>
              {description}
            </p>
          </div>
        </div>
      );
    case 'sm':
      return (
        <div
          className={clsx(
            'shadow-medium relative flex max-h-80 flex-col items-center gap-y-4 overflow-hidden rounded-3xl p-8 text-center lg:justify-between lg:gap-y-6 lg:px-6 lg:py-10 lg:text-left',
            className
          )}>
          <div className='bg-primary-500/24 absolute -right-1/12 -bottom-1/2 h-66.5 w-69.5 rounded-full blur-[140px]'></div>

          <div className='bg-primary-500 border-primary-50 lgz:size-16 flex size-12 shrink-0 items-center justify-center rounded-2xl border-4 text-white lg:border-10 xl:size-25 [&_svg]:size-full [&_svg]:rounded-[12.5px] [&_svg]:p-2'>
            {icon}
          </div>
          <div>
            <h4 className='text-title-md'>{title}</h4>
            <span className='text-body-md text-neutral-600'>
              {description}
            </span>
          </div>
        </div>
      );
  }
}
