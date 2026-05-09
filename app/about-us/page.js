import AboutUsHero from "components/layouts/sections/about-us-hero";
import WhyChooseOrbitask from "components/layouts/sections/WhyChooseOrbitask";
import StoryOfOrbitask from "components/layouts/sections/story-of-orbitask";
import OurTeam from "components/layouts/sections/our-team";
import GetInTouch from "components/layouts/sections/get-in-touch";

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
