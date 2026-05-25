import {
  AboutUsHero,
  WhyChooseOrbitask,
  StoryOfOrbitask,
  OurTeam,
  GetInTouch,
} from 'components';

export const metadata = {
  title: 'Pricing - OrbiTask',
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
