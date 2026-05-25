import { Logo } from 'components';
import { StoryPattern } from 'icons';
import HeaderSection from './HeaderSection';

function StoryOfOrbitask() {
  return (
    <section className='container space-y-5 lg:space-y-16'>
      <HeaderSection spaceY={2} className='text-center'>
        <HeaderSection.Title className='lg:text-display-xlg!'>
          What is the story of Orbitask?
        </HeaderSection.Title>
        <HeaderSection.Description className='text-body-md! lg:text-body-lg! mx-auto max-w-157.5'>
          Orbitask is more than a project; it’s the beginning of
          something bigger — a smarter way to work, connect, and
          grow.
        </HeaderSection.Description>
      </HeaderSection>
      <div className='relative mx-auto grid h-80 w-[80%] grid-cols-4 items-center lg:h-100'>
        <div className='z-10 flex translate-y-11 flex-col items-center gap-y-1 lg:translate-y-13 lg:gap-y-6'>
          <span className='text-body-xsm lg:text-body-md text-nowrap'>
            User Experience
          </span>
          <div className='text-primary-500 flex rotate-180 flex-col items-center justify-center gap-y-4'>
            <Logo
              variant='mark'
              type='blue'
              size={75}
              className='size-12 rotate-170 lg:size-18.75'
            />
            <StoryPattern className='h-19 lg:h-auto' />
          </div>
        </div>
        <div className='z-10 flex -translate-y-11 flex-col items-center gap-y-1 lg:-translate-y-13 lg:gap-y-6'>
          <div className='text-primary-500 flex flex-col items-center justify-center gap-y-4'>
            <Logo
              variant='mark'
              type='blue'
              size={75}
              className='size-12 rotate-170 lg:size-18.75'
            />
            <StoryPattern className='h-19 lg:h-auto' />
          </div>
          <span className='text-body-xsm lg:text-body-md text-nowrap'>
            Product Structure
          </span>
        </div>
        <div className='z-10 flex translate-y-11 flex-col items-center gap-y-1 lg:translate-y-13 lg:gap-y-6'>
          <span className='text-body-xsm lg:text-body-md text-nowrap'>
            Platform Development
          </span>
          <div className='text-primary-500 flex rotate-180 flex-col items-center justify-center gap-y-4'>
            <Logo
              variant='mark'
              type='blue'
              size={75}
              className='size-12 rotate-170 lg:size-18.75'
            />
            <StoryPattern className='h-19 lg:h-auto' />
          </div>
        </div>
        <div className='z-10 flex -translate-y-11 flex-col items-center gap-y-1 lg:-translate-y-13 lg:gap-y-6'>
          <div className='text-primary-500 flex flex-col items-center justify-center gap-y-4'>
            <Logo
              variant='mark'
              type='blue'
              size={75}
              className='size-12 rotate-170 lg:size-18.75'
            />
            <StoryPattern className='h-19 lg:h-auto' />
          </div>
          <span className='text-body-xsm lg:text-body-md text-nowrap'>
            Launch & Growth
          </span>
        </div>

        <span className='absolute right-0 left-0 z-0 mx-auto block h-1 w-full bg-[#454545]'></span>
      </div>
    </section>
  );
}

export default StoryOfOrbitask;
