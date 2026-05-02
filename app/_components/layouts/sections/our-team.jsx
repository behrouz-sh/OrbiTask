import Image from "next/image";
import designer_1 from "public/designer-1.webp";
import designer_2 from "public/designer-2.webp";
import designer_3 from "public/designer-3.webp";
import designer_4 from "public/designer-4.webp";
import designer_5 from "public/designer-5.webp";

function OurTeam() {
  return (
    <section className="space-y-10 container">
      <div className="space-y-2 text-center">
        <span className="text-semantic-info-600 text-title-sm">OUR TEAM</span>
        <h2 className="text-display-sm lg:text-display-xlg">The People Behind the Work</h2>
        <p className="mx-auto max-w-157.5 text-body-md text-neutral-600 lg:text-body-lg">We believe in collaboration, clear communication, and delivering results. Get to know the people who make it all happen.</p>
      </div>
      <div className="flex justify-between gap-x-4 lg:mx-auto px-3.5 lg:*:rounded-full *:rounded-4xl md:*:w-30 lg:*:w-38.5 lg:w-[85%] *:w-2/3 md:*:h-50 lg:*:h-91.5 *:h-[30dvh] *:object-center *:object-cover lg:overflow-visible overflow-x-auto *:shrink-0">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0C0F19]/44"></div>
          <span className="inline lg:left-11 absolute inset-0 m-auto size-fit! text-title-md text-white lg:text-nowrap sm:-rotate-90">UI/UX Designer</span>
          <Image src={designer_2} alt="designer" className="size-full object-center object-cover" />
        </div>
        <Image src={designer_5} alt=" designer" className="md:mt-16 lg:mt-53" />
        <Image src={designer_4} alt="designer" />
        <Image src={designer_3} alt="designer" className="md:mt-16 lg:mt-53" />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0C0F19]/44"></div>
          <span className="inline lg:left-11 absolute inset-0 m-auto size-fit! text-title-md text-white lg:text-nowrap sm:-rotate-90">UI/UX Designer</span>
          <Image src={designer_1} alt="designer" className="size-full object-center object-cover" />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
