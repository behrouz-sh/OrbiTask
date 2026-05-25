import Image from 'next/image';
import { Logo } from 'components';

// images
import heroImage from 'public/about-hero.webp';

function AboutUsHero() {
  return (
    <section className='relative z-0 -mt-21.5 flex h-[64dvh] w-full items-center justify-center pt-20 sm:h-120 lg:h-158.5'>
      <Image
        className='absolute inset-0 h-full w-full object-cover object-center'
        src={heroImage}
        alt='hero image'
      />
      <div className='absolute inset-0 bg-[#111]/70 bg-[linear-gradient(to_bottom,transparent_80%,rgb(13,13,13)_100%)]'></div>
      <div className='absolute space-y-4 text-center text-white lg:space-y-8'>
        <div className='text-display-sm lg:text-display-lg flex items-center justify-center gap-x-1'>
          <span>Ab</span>
          <Logo
            variant='mark'
            type='blue'
            className='size-10 -rotate-14 lg:size-18'
          />
          <span>ut us</span>
        </div>
        <p className='text-body-sm lg:text-body-lg max-w-147 px-5 lg:max-w-247'>
          Welcome to Orbitask – your all-in-one platform for
          managing projects, tasks, and teamwork effortlessly.
          Whether you're organizing workflows, tracking
          progress, or collaborating with your team, Orbitask
          helps you stay focused and get things done smarter.
          <br /> Our goal is simple: make productivity
          intuitive, flexible, and enjoyable.
        </p>
      </div>
    </section>
  );
}
export default AboutUsHero;
