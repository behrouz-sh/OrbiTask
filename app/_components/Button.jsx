'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
function Button({
  style = 'filled',
  size = 'lg',
  icon = false,
  loading,
  disable = false,
  className = null,
  to = '',
  onClick,
  children,
  type,
  props,
}) {
  const router = useRouter();

  let styleBtn = '';

  return (
    <button
      type={type}
      disabled={disable}
      className={clsx(
        // size
        size === 'lg' &&
          `text-body-md gap-x-2 p-3.5 [&_svg]:size-6 ${icon && 'px-6 pr-4'}`,
        size === 'md' &&
          `text-body-md gap-x-1.5 px-6 py-2.25 [&_svg]:size-6`,
        size === 'sm' &&
          `text-body-sm gap-x-1 px-4 py-2 [&_svg]:size-5`,
        size === 'tiny' && `text-body-xsm gap-x-2 px-3 py-0.5`,
        // style
        style === 'filled' &&
          'bg-primary-500 hover:bg-primary-600 active:bg-primary-800 disabled:bg-primary-100 disabled:text-primary-200 text-white',
        style === 'outlined' &&
          'border-primary-500 hover:border-primary-600 active:border-primary-800 disabled:border-primary-200 text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200 border',
        style === 'text' &&
          'text-primary-500 hover:text-primary-600 active:text-primary-800 disabled:text-primary-200',
        style === 'neutral' &&
          'border border-neutral-100 text-neutral-700 hover:border-neutral-200 hover:text-neutral-900 active:border-neutral-950 active:text-neutral-950 disabled:border-neutral-200 disabled:text-neutral-200',
        style === 'neutral-text' &&
          'text-neutral-700 hover:text-neutral-900 active:text-neutral-950 disabled:text-neutral-200',

        'flex items-center justify-center rounded-lg transition-colors',
        className
      )}
      onClick={to ? () => router.push(to) : onClick}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
