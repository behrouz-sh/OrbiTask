import Link from 'next/link';

import { Logo, Button } from 'components';
import Nav from './Nav';
import NavMobile from './NavMobile';

export default function Header({ them = 'dark' }) {
  return (
    <header className='relative z-50 container flex items-center justify-between py-4'>
      {/* logo && nav */}
      <div className='flex items-center gap-x-6 lg:gap-x-12'>
        {/* logo */}
        <Link href='/'>
          <Logo
            type='blue'
            className={`hidden h-8 sm:block md:hidden lg:block ${them === 'dark' ? 'text-neutral-900' : 'text-white'}`}
          />
          <Logo
            type='blue'
            variant='mark'
            className='size-8 sm:hidden md:block lg:hidden'
          />
        </Link>
        {/* nav */}
        <Nav them={them} />
      </div>
      {/* buttons */}
      <div className='hidden gap-x-2 md:flex'>
        <Button to='/signup' style='outlined' size='md'>
          Sign Up
        </Button>
        <Button to='/login' style='filled' size='md'>
          Login
        </Button>
      </div>
      {/* navbar mobile */}
      <NavMobile />
    </header>
  );
}
