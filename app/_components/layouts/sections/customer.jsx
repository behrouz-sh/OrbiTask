import { IconAirbnb, IconFitbit, IconNetflix, IconSlack, IconUber, IconGoogle } from "components/icons/general";

function Customer() {
  return (
    <section className="bg-primary-50 py-8 overflow-hidden text-center">
      <div className="space-y-10 container">
        <h3 className="text-title-md">Trusted by the worl’d largest business</h3>
        <div className="relative flex justify-between md:justify-between items-center sm:gap-x-8 lg:gap-x-0 overflow-hidden text-neutral-600 mobile-marquee">
          <IconSlack height="28px" />
          <IconNetflix height="24px" />
          <IconFitbit height="24px" />
          <IconGoogle height="32px" />
          <IconAirbnb height="32px" />
          <IconUber height="20px" />
        </div>
      </div>
    </section>
  );
}

export default Customer;
