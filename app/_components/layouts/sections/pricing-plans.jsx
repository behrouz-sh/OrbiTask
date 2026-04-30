import Button from "ui/button";
import { IconArrowRightSmall, IconCheckCircle, IconEnvelope } from "magicoon/regular";
import { IconAgency, IconEnterprise, IconUser } from "components/icons/general";

const featureData = {
  free: ["Manage personal tasks", "Access anywhere", "Core features included"],
  agency: ["All Individual features", "Real-time collaboration", "Shared boards & files", "Team notifications", "Basic admin controls"],
  enterprise: ["All included in Agency", "Custom integrations & support", "Dedicated account manager"],
};

function PricingAndPlans() {
  return (
    <section className="container">
      <div className="space-y-6 text-center">
        <h2 className="text-display-sm lg:text-display-lg">Pricing & Plans</h2>
        <span className="w-20 text-body-sm text-neutral-600 lg:text-body-lg">Find the perfect plan for you or your team. Start for free and unlock more features as you grow.</span>
      </div>
      <div className="flex justify-center items-center gap-x-6 lg:my-8 mt-8 lg:*:text-label-md *:text-label-sm">
        <span>Monthly</span>
        <div className="relative bg-neutral-100 p-1.25 rounded-full w-20 h-10">
          <input type="checkbox" className="peer z-10 absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
          <span className="block bg-white rounded-full w-8 h-full transition-all peer-checked:translate-x-9.5 duration-300"></span>
        </div>
        <span>Annually</span>
      </div>
      <div className="items-center gap-x-8 grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1">
        <div className="relative shadow-low p-9 rounded-4xl overflow-hidden price-card">
          <div className="space-y-7 mb-10.5">
            <IconUser className="text-primary-500" />
            <div>
              <span className="block font-semibold text-2xl/11">
                Freelancer <span className="text-primary-500">Free</span>
              </span>
              <span className="text-neutral-600 text-base/7">Best for solo users who need essential tools to stay organized and productive.</span>
            </div>
          </div>

          <div className="space-y-10.5 mb-14">
            <span className="inline-block text-[28px]/11.5">
              0 <span className="text-[22px]/9 text-neutral-500">/month</span>
            </span>
            <Button style="neutral" size="lg" className="w-full">
              Get started
              <IconArrowRightSmall />
            </Button>
          </div>

          <ul className="space-y-6">
            {featureData?.free.map((item) => (
              <li className="flex items-center gap-x-2" key={item}>
                <IconCheckCircle className="size-5 text-primary-500" />
                <span className="text-neutral-600 text-sm/6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary-500 p-9 rounded-4xl text-white">
          <div className="flex justify-between items-center mb-8">
            <IconAgency className="text-white" />
            <span className="mx-6 text-sm/6">Most popular</span>
          </div>

          <div className="space-y-6">
            <span className="block font-semibold text-2xl/11">Agency</span>
            <span className="text-neutral-50 text-base/7">Ideal for teams looking to streamline workflows, share boards, and work together efficiently.</span>
          </div>

          <div>
            <span className="inline-block my-10.5 text-[28px]/11.5">
              $9,200 <span className="text-[22px]/9">/month</span>
            </span>
            <Button style="filled" size="lg" color="white" className="bg-white hover:bg-primary-50! active:bg-primary-100! mb-14 w-full text-primary-500!">
              Get started
              <IconArrowRightSmall />
            </Button>
          </div>
          <ul className="space-y-6">
            {featureData?.agency.map((item) => (
              <li className="flex items-center gap-x-2" key={item}>
                <IconCheckCircle className="size-5" />
                <span className="text-sm/6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative shadow-low p-9 rounded-4xl overflow-hidden price-card">
          <div className="space-y-7 mb-32.5">
            <IconEnterprise className="text-primary-500" />
            <div>
              <span className="block font-semibold text-2xl/11">
                Freelancer <span className="text-primary-500">Enterprise</span>
              </span>
              <span className="text-neutral-600 text-base/7">Custom solutions for large teams & organizations.</span>
            </div>
          </div>

          <Button style="neutral" size="lg" color="white" className="mb-14 w-full">
            <IconEnvelope />
            Contact us
          </Button>

          <ul className="space-y-6">
            {featureData?.enterprise.map((item) => (
              <li className="flex items-center gap-x-2" key={item}>
                <IconCheckCircle className="size-5 text-primary-500" />
                <span className="text-neutral-600 text-sm/6">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PricingAndPlans;
