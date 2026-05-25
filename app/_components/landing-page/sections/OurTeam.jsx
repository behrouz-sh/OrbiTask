import HeaderSection from './HeaderSection';
import OurTeam from '../OurTeam';

// images
import designer_1 from 'public/designer-1.webp';
import designer_2 from 'public/designer-2.webp';
import designer_3 from 'public/designer-3.webp';
import designer_4 from 'public/designer-4.webp';
import designer_5 from 'public/designer-5.webp';

export default function OurTeams() {
  return (
    <section className='container space-y-10'>
      <HeaderSection spaceY={2} className='text-center'>
        <span className='text-semantic-info-600 text-title-sm'>
          OUR TEAM
        </span>
        <HeaderSection.Title className='lg:text-display-xlg!'>
          The People Behind the Work
        </HeaderSection.Title>
        <HeaderSection.Description className='text-body-md! lg:text-body-lg! mx-auto max-w-157.5'>
          We believe in collaboration, clear communication, and
          delivering results. Get to know the people who make it
          all happen.
        </HeaderSection.Description>
      </HeaderSection>

      <div className='flex justify-between gap-x-4 overflow-x-auto px-3.5 lg:mx-auto lg:w-[85%] lg:overflow-visible'>
        <OurTeam image={designer_2} role='UI/UX Designer' />
        <OurTeam
          image={designer_5}
          role='UI/UX Designer'
          className='md:mt-16 lg:mt-53'
        />
        <OurTeam image={designer_4} role='UI/UX Designer' />
        <OurTeam
          image={designer_3}
          role='UI/UX Designer'
          className='md:mt-16 lg:mt-53'
        />
        <OurTeam image={designer_1} role='UI/UX Designer' />
      </div>
    </section>
  );
}
