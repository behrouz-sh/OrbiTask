import Hero from "components/layouts/sections/hero";
import Customer from "components/layouts/sections/customer";
import Features from "components/layouts/sections/features";
import GalaxyView from "components/layouts/sections/galaxy-view";
import Integration from "components/layouts/sections/integration";
import Description from "components/layouts/sections/description";
import PricingAndPlans from "components/layouts/sections/pricing-plans";
import Review from "components/layouts/sections/review";
import FAQ from "components/layouts/sections/faq";

import project_workload from "../public/project-workload.png";
import project_progress from "../public/project-progress.png";

export const metadata = {
  title: "Home - OrbiTask",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Customer />
      <Features />
      <GalaxyView />
      <Description>
        <Description.Image src={project_progress} />
        <div className="space-y-6">
          <Description.Title>Easy manage progres your project</Description.Title>
          <Description.Description>No more scattered tools or missing updates. With this platform, you can track project progress, manage tasks, and collaborate with your team—all in one place. Stay organized, stay focused, and move your project forward with confidence.</Description.Description>
          <div className="flex *:flex *:flex-col gap-x-4 md:gap-x-12">
            <div>
              <span className="font-medium text-headline-sm lg:text-headline-md">900+</span>
              <span className="font-medium text-body-sm text-neutral-600 md:text-body-md">Active users</span>
            </div>
            <div>
              <span className="font-medium text-headline-sm lg:text-headline-md">250+</span>
              <span className="font-medium text-body-sm text-neutral-600 md:text-body-md">Design Team</span>
            </div>
            <div>
              <span className="font-medium text-headline-sm lg:text-headline-md">1200+</span>
              <span className="font-medium text-body-sm text-neutral-600 md:text-body-md">Download desktop</span>
            </div>
          </div>
          <Description.Button>Explore Now</Description.Button>
        </div>
      </Description>
      <Integration />
      <Description className="flex-row-reverse">
        <Description.Image src={project_workload} />
        <div className="space-y-6 lg:space-y-14">
          <Description.Title>Visualize your project with powerful analytics</Description.Title>
          <Description.Description>Get a clear, real-time overview of your project performance through interactive charts and smart insights. From task completion trends to team productivity and workflow bottlenecks, everything you need to make better decisions is right in front of you.</Description.Description>
          <Description.Button>Explore Now</Description.Button>
        </div>
      </Description>
      <PricingAndPlans />
      <Review />
      <FAQ />
    </>
  );
}
