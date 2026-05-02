import ContactHero from "components/layouts/sections/contact-hero";
import GetInTouch from "components/layouts/sections/get-in-touch";
import ContactInfo from "components/layouts/sections/contact-info";
import FAQ from "components/layouts/sections/faq";

export const metadata = {
  title: "Pricing - OrbiTask",
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
