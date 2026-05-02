import AboutUsHero from "@/app/_components/layouts/sections/about-us-hero";
import WhyChooseOrbitask from "@/app/_components/layouts/sections/WhyChooseOrbitask";
import StoryOfOrbitask from "@/app/_components/layouts/sections/story-of-orbitask";
import OurTeam from "@/app/_components/layouts/sections/our-team";
import GetInTouch from "@/app/_components/layouts/sections/get-in-touch";

export const metadata = {
  title: "Pricing - OrbiTask",
};

function Pricing() {
  return (
    <>
      <AboutUsHero />
      <WhyChooseOrbitask />
      <StoryOfOrbitask />
      <OurTeam />
      <GetInTouch map={true} />
    </>
  );
}

export default Pricing;
