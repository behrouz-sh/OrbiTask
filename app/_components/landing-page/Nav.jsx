'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav({
  them,
  onToggle,
  isMobile = false,
}) {
  const pathname = usePathname();
  const linkClass = (href) =>
    pathname === href
      ? 'text-label-md md:text-label-sm lg:text-label-md text-primary-500'
      : null;

  const navItems = ['Home', 'About Us', 'Contact', 'Pricing'];
  return (
    <nav className='overflow-y-auto'>
      <ul
        className={clsx(
          'text-body-lg md:text-body-sm lg:text-body-lg gap-x-6 transition-colors md:gap-x-8',
          isMobile
            ? 'flex flex-col gap-y-4'
            : 'hidden items-center md:flex',
          them === 'dark' || isMobile
            ? 'text-neutral-700'
            : 'text-white'
        )}>
        {navItems.map((item) => (
          <li
            className={linkClass(
              `/${item !== 'Home' ? item.toLowerCase().replace(/ /g, '-') : ''}`
            )}
            onClick={isMobile && onToggle}>
            <Link
              href={`/${item !== 'Home' ? item.toLowerCase().replace(/ /g, '-') : ''}`}
              className='block py-4.5 md:inline md:py-0'>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
