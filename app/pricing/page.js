import PricingAndPlans from "components/layouts/sections/pricing-plans";
import FAQ from "components/layouts/sections/faq";

export const metadata = {
  title: "Pricing - OrbiTask",
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
