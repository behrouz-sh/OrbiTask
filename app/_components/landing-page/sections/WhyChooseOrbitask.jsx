import { IconChartBarVertical, IconChat } from 'magicoon';

import HeaderSection from './HeaderSection';
import WhyChooseUsCard from '../WhyChooseUsCard';

// images
import aiFloat from 'public/ai-float.webp';
import taskCard from 'public/task-card.webp';

function WhyChooseOrbitask() {
  return (
    <section className='container space-y-8'>
      <HeaderSection spaceY={2} className='text-center'>
        <span className='text-semantic-info-600 text-title-sm'>
          About Us
        </span>
        <HeaderSection.Title className='lg:text-display-xlg!'>
          Why Choose Orbitask?
        </HeaderSection.Title>
        <HeaderSection.Description className='text-body-md! lg:text-body-lg!'>
          Designed to make teamwork effortless
        </HeaderSection.Description>
      </HeaderSection>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-rows-2'>
        <WhyChooseUsCard
          size='lg'
          title='Your Workspace is Ready!'
          description='Orbitask’s smart AI is here to help you plan,
              organize, and optimize your projects — all in one
              place.'
          image={aiFloat}
          className='md:col-span-2'
        />
        <WhyChooseUsCard
          size='sm'
          title='Smart Insights'
          description='Track progress and boost performance with clean
              visual analytics.'
          icon={<IconChartBarVertical />}
          className='order-first col-span-1 md:order-0'
        />
        <WhyChooseUsCard
          size='sm'
          title='Stay connected with Chat.'
          description='Message teammates instantly, share updates, and
              collaborate without switching apps.'
          icon={<IconChat />}
          className='col-span-1'
        />
        <WhyChooseUsCard
          size='lg'
          title='Manage Your Team Effortlessly'
          description={
            <>
              Assign roles, track progress, and stay connected —
              all in one place.
              <br /> Simple, powerful, and built for teamwork.
            </>
          }
          image={taskCard}
          className='md:col-span-2'
        />
      </div>
    </section>
  );
}
export default WhyChooseOrbitask;
