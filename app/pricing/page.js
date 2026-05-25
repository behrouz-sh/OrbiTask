import PricingAndPlans from '@/app/_components/landing-page/sections/PricingAndPlans';
import FAQ from '@/app/_components/landing-page/sections/FAQ';

export const metadata = {
  title: 'Pricing - OrbiTask',
};
function Pricing() {
  return (
    <>
      <PricingAndPlans table={true} />
      <FAQ />
    </>
  );
}

export default Pricing;
