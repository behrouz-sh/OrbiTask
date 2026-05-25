'use client';
import { useState } from 'react';

import { Accordion, Description } from 'components';

import {
  IconInfoCircle,
  IconLayerGroup,
  IconMobile,
  IconMoneyBill,
  IconShieldCheck,
  IconUserAlt,
  IconInfoCircleFill,
  IconLayerGroupFill,
  IconMobileFill,
  IconMoneyBillFill,
  IconShieldCheckFill,
  IconUserAltFill,
} from 'magicoon';
import HeaderSection from './HeaderSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const accordionData = [
    {
      icon: <IconLayerGroup />,
      iconFill: <IconLayerGroupFill />,
      title: 'How can I create my first project ?',
      description:
        'You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started.',
    },
    {
      icon: <IconUserAlt />,
      iconFill: <IconUserAltFill />,
      title: 'Can I invite team members to my workspace ?',
      description:
        'Yes! You can invite team members by clicking the “Add Member” button. Just enter their email address, and they’ll receive an invitation to join your workspace.',
    },
    {
      icon: <IconInfoCircle />,
      iconFill: <IconInfoCircleFill />,
      title: 'Do I need to pay to use the platform ?',
      description:
        'No, you can start using the platform for free with the Individual Plan. If you need more features for teams or organizations, you can upgrade at any time.',
    },
    {
      icon: <IconShieldCheck />,
      iconFill: <IconShieldCheckFill />,
      title: 'Is my data secure and private ?',
      description:
        'Absolutely. We use industry-standard encryption and security measures to keep your data safe. Your information is never shared with third parties without your consent.',
    },
    {
      icon: <IconMobile />,
      iconFill: <IconMobileFill />,
      title: 'Can I use the platform on mobile devices ?',
      description:
        'Yes. You can access the platform through any modern web browser on mobile, and a mobile app version is also available for better experience.',
    },
    {
      icon: <IconMoneyBill />,
      iconFill: <IconMoneyBillFill />,
      title: 'Can I upgrade or downgrade my plan at any time ?',
      description:
        'Yes, you can change your plan whenever you want through the Billing & Plans section in your account settings. The changes will take effect immediately.',
    },
  ];
  return (
    <section className='container space-y-8'>
      <HeaderSection className='text-center'>
        <HeaderSection.Title>
          Frequently Asked Questions
        </HeaderSection.Title>
        <HeaderSection.Description className='mx-auto max-w-200'>
          We’ve gathered some frequently asked questions to help
          you get started quickly and make the most of the
          platform.
        </HeaderSection.Description>
      </HeaderSection>
      <div className='space-y-5 lg:columns-2'>
        {accordionData.map((accordion, index) => (
          <Accordion
            key={index}
            isOpen={openIndex == index}
            onToggle={() => toggleAccordion(index)}
            icon={accordion.icon}
            iconFill={accordion.iconFill}
            title={accordion.title}
            description={accordion.description}
          />
        ))}
      </div>
    </section>
  );
}
