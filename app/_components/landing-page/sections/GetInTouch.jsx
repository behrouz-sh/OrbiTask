import Image from 'next/image';
import { Feature } from 'components';

import {
  IconChatEdit,
  IconLocationPin,
  IconPhoneCall,
  IconSettings,
  IconUserAlt,
} from 'magicoon';

// images
import mapImage from 'public/map.webp';
import HeaderSection from './HeaderSection';

const featureData = [
  {
    icon: <IconChatEdit />,
    title: 'Chat to support',
    description:
      'Get help with projects, team workspaces, or AI planning tools.',
  },
  {
    icon: <IconSettings />,
    title: 'Technical assistance',
    description:
      'Need help with integrations, automations? Our technical team is ready to assist.',
  },
  {
    icon: <IconUserAlt />,
    title: 'Visit us',
    description:
      'Visit our HQ to learn more about how we build and improve our project',
  },
  {
    icon: <IconPhoneCall />,
    title: 'Call us',
    description:
      'For quick support regarding workflows, onboarding, or team access.',
  },
];

export default function GetInTouch({ map = false }) {
  return (
    <section className='container space-y-12'>
      <HeaderSection className='text-center'>
        <HeaderSection.Title>
          Get in touch with our team
        </HeaderSection.Title>
        <HeaderSection.Description>
          We’re here to help you with anything related to your
          projects and workspace.
        </HeaderSection.Description>
      </HeaderSection>
      <div className='grid-cols-0 grid grid-rows-4 gap-x-2 gap-y-4 md:grid-cols-4 md:grid-rows-1 lg:gap-x-6'>
        {featureData.map((feature) => (
          <Feature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      {map && (
        <div className='relative h-78.5 w-full overflow-hidden rounded-4xl'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_50%,black_100%)] opacity-70'></div>
          <Image
            src={mapImage}
            alt='map'
            className='h-full w-[120%] object-cover object-center'
          />
          <div className='ring-primary-400/20 absolute inset-0 z-50 m-auto size-fit rounded-full p-2 ring-4'>
            <span className='bg-primary-400/20 absolute block size-[80%] blur-xl'></span>
            <IconLocationPin className='ring-primary-400/20 text-primary-500 size-16 rounded-full ring-4' />
          </div>
        </div>
      )}
    </section>
  );
}
