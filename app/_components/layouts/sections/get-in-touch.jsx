import Image from "next/image";
import mapImage from "public/map.webp";

import Feature from "components/layouts/Feature";

import { IconChatEdit, IconLocationPin, IconPhoneCall, IconSettings, IconUserAlt } from "magicoon/regular";

const featureData = [
  { icon: <IconChatEdit />, title: "Chat to support", description: "Get help with projects, team workspaces, or AI planning tools." },
  { icon: <IconSettings />, title: "Technical assistance", description: "Need help with integrations, automations? Our technical team is ready to assist." },
  { icon: <IconUserAlt />, title: "Visit us", description: "Visit our HQ to learn more about how we build and improve our project" },
  { icon: <IconPhoneCall />, title: "Call us", description: "For quick support regarding workflows, onboarding, or team access." },
];
function GetInTouch({ map = false }) {
  return (
    <section className="space-y-12 container">
      <div className="space-y-6 text-center">
        <h2 className="text-display-sm lg:text-display-lg">Get in touch with our team</h2>
        <span className="text-body-sm text-neutral-600 lg:text-body-lg">We’re here to help you with anything related to your projects and workspace.</span>
      </div>
      <div className="gap-x-2 gap-y-4 lg:gap-x-6 grid grid-cols-0 md:grid-cols-4 grid-rows-4 md:grid-rows-1">
        {featureData.map((feature) => (
          <Feature key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
      {map && (
        <div className="relative rounded-4xl w-full h-78.5 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,transparent_50%,black_100%)] opacity-70"></div>
          <Image src={mapImage} alt="map" className="w-[120%] h-full object-center object-cover" />
          <div className="z-50 absolute inset-0 m-auto p-2 rounded-full ring-4 ring-primary-400/20 size-fit">
            <span className="block absolute bg-primary-400/20 blur-xl size-[80%]"></span>
            <IconLocationPin className="rounded-full ring-4 ring-primary-400/20 size-16 text-primary-500" />
          </div>
        </div>
      )}
    </section>
  );
}

export default GetInTouch;
