import Image from 'next/image';

import { Button } from 'components';
import { IconArrowRight, IconHand } from 'magicoon';

// images
import heroImage from 'public/home-hero.webp';

export default function Hero() {
  return (
    <section className='container flex items-center gap-x-3 pt-9 pb-6 md:gap-x-0'>
      <div className='flex flex-col gap-y-6 lg:gap-y-8'>
        <h1 className='text-display-sm lg:text-display-lg'>
          A simple project management tool to manage anything!
        </h1>
        <span className='text-body-sm lg:text-body-lg'>
          Keep every project, client, and deadline moving in
          sync from one organized space.
        </span>
        {/* button */}
        <div className='flex w-fit flex-col items-center gap-y-2'>
          <Button
            style='filled'
            size='lg'
            icon={true}
            to='/signup'>
            Start from here. It&apos;s Free
            <IconArrowRight />
          </Button>
          <span className='text-body-sm text-neutral-600'>
            Get Started Without a Credit Card
          </span>
        </div>
        {/* scrolling */}
        <div className='flex gap-x-2.5'>
          <IconHand className='text-primary-500 my-0.5 size-6' />
          <span className='text-body-md text-neutral-600'>
            <span className='text-primary-500'>
              Start scrolling
            </span>
            &nbsp;to see our features
          </span>
        </div>
      </div>
      <Image
        className='hidden h-auto w-5/12 md:block md:w-100 lg:w-130 xl:w-180'
        src={heroImage}
        alt='hero image'
      />
    </section>
  );
}
