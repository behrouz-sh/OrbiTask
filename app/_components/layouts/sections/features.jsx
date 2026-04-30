import Feature from "components/layouts/Feature";

import {  IconAiFill } from "magicoon/filled";
import { IconActivityCircle, IconChartBarVertical } from "magicoon/regular";
import { Pattern } from "components/icons/general";

const FeaturesData = [
  {
    id: 1,
    icon: <IconAiFill />,
    title: "AI Workflow Assistant",
    description: "Automate tasks, predict delays, and stay ahead with smart AI planning.",
  },
  {
    id: 2,
    icon: <IconActivityCircle />,
    title: "Live Collaboration Hub",
    description: "Chat, share, and manage projects together — all in real time.",
  },
  {
    id: 3,
    icon: <IconChartBarVertical />,
    title: "Smart Insights",
    description: "Track progress and boost performance with clean visual analytics.",
  },
];

function Features() {
  return (
    <section className="overflow-x-clip">
      <div className="relative space-y-8 container">
        <div className="space-y-4 lg:space-y-6 text-center">
          <h2 className="text-display-sm lg:text-display-lg">Main Features</h2>
          <p className="text-body-sm text-neutral-600 lg:text-body-lg">Discover the powerful tools that make project management easier, faster, and more collaborative.</p>
        </div>
        <div className="gap-x-2 gap-y-4 lg:gap-x-6 grid grid-cols-0 md:grid-cols-3 grid-rows-3 md:grid-rows-1">
          {FeaturesData.map((feature) => (
            <Feature key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
        <Pattern className="hidden lg:block top-[-96%] -right-4/12 -z-10 absolute text-primary-50" />
        <Pattern className="hidden lg:block bottom-[-72%] xl:bottom-[-108%] -left-4/12 -z-10 absolute text-primary-50" />
      </div>
    </section>
  );
}

export default Features;
