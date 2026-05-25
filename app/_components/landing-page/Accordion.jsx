'use client';
import clsx from 'clsx';
import { IconMinus, IconPlus } from 'magicoon';

function Accordion({
  icon,
  iconFill,
  title = 'Title Empty!',
  description = 'Description Empty!',
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={clsx(
        'shadow-low flex h-fit w-full break-inside-avoid gap-x-2 rounded-2xl border-2 p-6 transition-transform duration-1000 ease-linear [&_>svg]:size-8 [&_>svg]:p-1.5 lg:[&_>svg]:size-9',
        isOpen
          ? 'border-primary-500 [&_>svg]:text-primary-500'
          : 'border-white [&_>svg]:text-neutral-500'
      )}>
      {isOpen ? iconFill || icon : icon}
      <div className='flex w-full flex-col gap-y-5'>
        <button
          onClick={onToggle}
          className={clsx(
            'flex cursor-pointer items-center justify-between',
            isOpen ? 'text-primary-500' : 'text-neutral-800'
          )}>
          <span className='text-label-sm lg:text-label-md text-left'>
            {title}
          </span>
          <span
            className={clsx(
              'ml-auto hidden rounded-lg p-2 sm:block [&_svg]:size-4',
              isOpen
                ? 'bg-primary-500 text-white'
                : 'bg-neutral-50 text-neutral-700'
            )}>
            {isOpen ? <IconMinus /> : <IconPlus />}
          </span>
        </button>
        {isOpen && (
          <p className='text-body-sm lg:text-body-md text-neutral-800'>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
