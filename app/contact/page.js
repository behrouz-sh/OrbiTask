import {
  ContactHero,
  GetInTouch,
  ContactInfo,
  FAQ,
} from 'components';

export const metadata = {
  title: 'Pricing - OrbiTask',
};

function Pricing() {
  return (
    <>
      <ContactHero />
      <GetInTouch />
      <ContactInfo />
      <FAQ />
    </>
  );
}

export default Pricing;
