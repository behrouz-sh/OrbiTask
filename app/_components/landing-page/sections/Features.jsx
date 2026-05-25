import { Feature } from 'components';
import HeaderSection from './HeaderSection';

import {
  IconAiFill,
  IconActivityCircle,
  IconChartBarVertical,
} from 'magicoon';
import { Pattern } from 'icons';

const FeaturesData = [
  {
    id: 1,
    icon: <IconAiFill />,
    title: 'AI Workflow Assistant',
    description:
      'Automate tasks, predict delays, and stay ahead with smart AI planning.',
  },
  {
    id: 2,
    icon: <IconActivityCircle />,
    title: 'Live Collaboration Hub',
    description:
      'Chat, share, and manage projects together — all in real time.',
  },
  {
    id: 3,
    icon: <IconChartBarVertical />,
    title: 'Smart Insights',
    description:
      'Track progress and boost performance with clean visual analytics.',
  },
];
function Features() {
  return (
    <section className='space-y-8 overflow-x-clip'>
      <HeaderSection className='text-center'>
        <HeaderSection.Title>Main Features</HeaderSection.Title>
        <HeaderSection.Description>
          Discover the powerful tools that make project
          management easier, faster, and more collaborative.
        </HeaderSection.Description>
      </HeaderSection>
      <div className='relative container space-y-8'>
        <div className='grid-cols-0 grid grid-rows-3 gap-x-2 gap-y-4 md:grid-cols-3 md:grid-rows-1 lg:gap-x-6'>
          {FeaturesData.map((feature) => (
            <Feature
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <Pattern className='text-primary-50 absolute top-[-96%] -right-4/12 -z-10 hidden xl:block' />
        <Pattern className='text-primary-50 absolute bottom-[-72%] -left-4/12 -z-10 hidden xl:bottom-[-108%] xl:block' />
      </div>
    </section>
  );
}
export default Features;
