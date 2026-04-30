"use client";
import { useState } from "react";

import Accordion from "components/layouts/Accordion";

import { IconInfoCircle, IconLayerGroup, IconMobile, IconMoneyBill, IconShieldCheck, IconUserAlt } from "magicoon/regular";
import { IconInfoCircleFill, IconLayerGroupFill, IconMobileFill, IconMoneyBillFill, IconShieldCheckFill, IconUserAltFill } from "magicoon/filled";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="space-y-8 container">
      <div className="space-y-6 mx-auto max-w-200 text-center">
        <h2 className="text-display-sm lg:text-display-lg">Frequently Asked Questions</h2>
        <span className="text-body-lg text-neutral-600">We’ve gathered some frequently asked questions to help you get started quickly and make the most of the platform.</span>
      </div>
      <div className="gap-x-6 gap-y-5 grid xl:grid-cols-2">
        <div className="space-y-5">
          <Accordion isOpen={openIndex === 0} onToggle={() => toggleAccordion(0)} icon={<IconLayerGroup />} iconFill={<IconLayerGroupFill />} title="How can I create my first project ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
          <Accordion isOpen={openIndex === 1} onToggle={() => toggleAccordion(1)} icon={<IconUserAlt />} iconFill={<IconUserAltFill />} title="Can I invite team members to my workspace ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
          <Accordion isOpen={openIndex === 2} onToggle={() => toggleAccordion(2)} icon={<IconInfoCircle />} iconFill={<IconInfoCircleFill />} title="Do I need to pay to use the platform ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
        </div>
        <div className="space-y-5">
          <Accordion isOpen={openIndex === 3} onToggle={() => toggleAccordion(3)} icon={<IconShieldCheck />} iconFill={<IconShieldCheckFill />} title="Is my data secure and private ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
          <Accordion isOpen={openIndex === 4} onToggle={() => toggleAccordion(4)} icon={<IconMobile />} iconFill={<IconMobileFill />} title="Can I use the platform on mobile devices ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
          <Accordion isOpen={openIndex === 5} onToggle={() => toggleAccordion(5)} icon={<IconMoneyBill />} iconFill={<IconMoneyBillFill />} title="Can I upgrade or downgrade my plan at any time ?" description="You can easily create a new project by clicking the “Create Project” button on your workspace dashboard. Add a name, description, and invite members to get started." />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
