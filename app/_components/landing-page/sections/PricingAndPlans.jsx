'use client';
import Table from '../../table/Table';
import HeaderSection from './HeaderSection';
import PricingCard from '../PricingCard';
import Toggle from '../Toggle';
import { useState } from 'react';
import { IconAgency, IconEnterprise, IconUser } from 'icons';
import { features } from 'node:process';

function PricingAndPlans({ table = false }) {
  const [isChecked, setIsChecked] = useState(false);
  const tableData = [
    {
      header: 'Management',
      features: [
        {
          name: 'Customizable Workflows',
          data: [100, 100, 100, 'Unlimited'],
        },
        {
          name: 'Project Planning',
          data: [true, false, true, true],
        },
        {
          name: 'Time Tracking',
          data: [true, true, true, true],
        },
      ],
    },
    {
      header: 'Visualization',
      features: [
        {
          name: 'Gantt Charts',
          data: [false, false, false, true],
        },
        {
          name: 'Agile Methodology Support',
          data: [true, true, true, true],
        },
        {
          name: 'Reporting and Analytics',
          data: [false, false, true, true],
        },
        {
          name: 'Team and Individual Dashboards',
          data: [false, true, true, true],
        },
      ],
    },
    {
      header: 'Integarations',
      features: [
        {
          name: 'Document Management',
          data: [false, false, false, true],
        },
        {
          name: 'Client Collaboration',
          data: [false, false, true, true],
        },
        {
          name: 'Mobile App Integration',
          data: [false, false, true, true],
        },
      ],
    },
  ];

  return (
    <section className='container'>
      <HeaderSection className='text-center'>
        <HeaderSection.Title>
          Pricing & Plans
        </HeaderSection.Title>
        <HeaderSection.Description className='mx-auto max-w-200'>
          Find the perfect plan for you or your team. Start for
          free and unlock more features as you grow.
        </HeaderSection.Description>
      </HeaderSection>

      {/* toggle */}
      <div className='lg:*:text-label-md *:text-label-sm mt-8 flex items-center justify-center gap-x-6 lg:my-8'>
        <span>Monthly</span>
        <Toggle
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <span>Annually</span>
      </div>

      {/* pricing cards */}
      <div className='grid grid-cols-1 grid-rows-3 items-center gap-x-8 lg:grid-cols-3 lg:grid-rows-1'>
        <PricingCard
          icon={<IconUser />}
          title={
            <>
              Freelancer{' '}
              <span className='text-primary-500'>Free</span>
            </>
          }
          description='Best for solo users who need essential tools to stay
            organized and productive.'
          isYearly={isChecked}
          price='0'
          features={[
            'Manage personal tasks',
            'Access anywhere',
            'Core features included',
          ]}
        />
        <PricingCard
          type='primary'
          popular={true}
          icon={<IconAgency />}
          title='Agency'
          isYearly={isChecked}
          price={isChecked ? 110000 : 9200}
          description='Ideal for teams looking to streamline workflows, share boards, and work together efficiently.'
          features={[
            'All Individual features',
            'Real-time collaboration',
            'Shared boards & files',
            'Team notifications',
            'Basic admin controls',
          ]}
        />
        <PricingCard
          icon={<IconEnterprise />}
          title='Enterprise'
          description='Custom solutions for large teams & organizations.'
          features={[
            'All included in Agency',
            'Custom integrations & support',
            'Dedicated account manager',
          ]}
        />
      </div>
      {table && (
        <Table className='mt-6'>
          {tableData.map((table) => (
            <>
              <Table.Header>{table.header}</Table.Header>
              <Table.Content>
                {table.features.map((feature) => (
                  <Table.Row>
                    <Table.FeatureName>
                      {feature.name}
                    </Table.FeatureName>
                    <Table.FeatureValue>
                      {feature.data.map((featureValue) =>
                        featureValue === true ? (
                          <Table.IconCheckCircle />
                        ) : featureValue === false ? (
                          <Table.DashedLine />
                        ) : featureValue === 'Unlimited' ? (
                          <Table.TextBlue>
                            Unlimited
                          </Table.TextBlue>
                        ) : typeof featureValue === 'number' ? (
                          <Table.Text>
                            {featureValue}
                          </Table.Text>
                        ) : (
                          <Table.Text></Table.Text>
                        )
                      )}
                    </Table.FeatureValue>
                  </Table.Row>
                ))}
              </Table.Content>
            </>
          ))}
        </Table>
      )}
    </section>
  );
}

export default PricingAndPlans;
