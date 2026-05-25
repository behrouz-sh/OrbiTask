'use client';
import { useState } from 'react';

import Nav from './Nav';
import { Logo, Button } from 'components';
import { IconMenu, IconTimes } from 'magicoon';

export default function NavMobile() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavMobile = () =>
    setIsNavOpen((toggle) => !toggle);

  return (
    <>
      {/* buttons */}
      <div className='flex items-center gap-x-4 md:hidden'>
        <Button to='/signup' style='filled' size='md'>
          Get Started
        </Button>
        <span onClick={toggleNavMobile}>
          <IconMenu className='size-9 p-2 text-neutral-600' />
        </span>
      </div>

      {/* nav mobile */}
      {isNavOpen && (
        <div className='fixed inset-0 z-50 container flex h-dvh flex-col bg-white pt-4 text-neutral-700 transition-transform duration-1000 md:hidden'>
          {/* logo && menuIcon */}
          <div className='mb-4 flex items-center justify-between'>
            <Logo
              type='blue'
              variant='mark'
              className='size-8'
            />
            <span onClick={toggleNavMobile}>
              <IconTimes className='size-10 p-2 text-neutral-600' />
            </span>
          </div>
          {/* nav */}
          <Nav isMobile={true} onToggle={toggleNavMobile} />
          {/* buttons */}
          <div className='mt-auto mb-[4dvh] flex flex-col gap-2 sm:flex-row'>
            <Button
              to='/login'
              style='filled'
              size='lg'
              className='w-full'>
              Login
            </Button>
            <Button
              to='/signup'
              style='outlined'
              size='lg'
              className='w-full'>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
