import Image from 'next/image';
import { Button } from 'components';

// images
import taskCard from 'public/task-card.webp';
import HeaderSection from './HeaderSection';

function GalaxyView() {
  return (
    <section className='container flex flex-row-reverse items-center gap-x-3 md:flex-row md:justify-between md:gap-x-13'>
      <Image
        className='hidden h-auto w-80 p-6 md:block lg:w-120 xl:w-170 xl:p-0'
        src={taskCard}
        alt='image'
        placeholder='blur'
      />
      <div className='space-y-6 md:max-w-129.25'>
        <HeaderSection spaceY={2}>
          <HeaderSection.Title>
            Work together
          </HeaderSection.Title>
          <HeaderSection.Description>
            Collaborate in real time, share files, and let Orbi
            AI help your team stay organized and productive.
          </HeaderSection.Description>
        </HeaderSection>
        <Button style='filled' size='lg'>
          Get Started
        </Button>
      </div>
    </section>
  );
}
export default GalaxyView;
