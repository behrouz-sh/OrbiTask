import { IconFaceGrinStarsFill } from "../../icons/magicoon/filled";
import { IconEnvelope, IconPhone } from "../../icons/magicoon/regular";

function ContactInfo() {
  return (
    <section className="bg-primary-50 py-20">
      <div className="gap-y-10 grid lg:grid-cols-2 text-center container">
        <div className="flex flex-col gap-y-6 lg:text-left">
          <span className="text-body-lg">Contact Info</span>
          <span className="text-display-sm lh:text-display-md">
            We are always
            <IconFaceGrinStarsFill className="inline-block mx-2 lg:mx-3.25 lg:size-16 text-primary-500" />
            happy to
            <br className="hidden lg:block" /> assist you
          </span>
        </div>
        <div className="*:flex *:flex-col gap-y-8 lg:*:gap-y-4 *:gap-y-2 grid md:grid-cols-2 lg:*:px-8 divide-5 md:text-left">
          <div>
            <div>
              <div className="flex justify-center md:justify-normal items-center gap-x-2">
                <IconEnvelope className="size-6 shrink-0" />
                <span className="text-label-md">Email Address</span>
              </div>
              <span className="block bg-neutral-950 mx-auto md:mx-0 mt-2 md:mt-2 lg:mt-6 rounded-full w-1/3 lg:w-6.75 h-0.75"></span>
            </div>
            <div className="flex flex-col gap-y-4 lg:gap-0">
              <span className="text-label-md">help@info.com</span>
              <span className="text-body-lg">
                Assistance hours:
                <br /> Monday - Friday 6 am to 8 pm EST
              </span>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center md:justify-normal items-center gap-x-2">
                <IconPhone className="size-6 shrink-0" />
                <span className="text-label-md">Number</span>
              </div>
              <span className="block bg-neutral-950 mx-auto md:mx-0 mt-2 md:mt-2 lg:mt-6 rounded-full w-1/3 lg:w-6.75 h-0.75"></span>
            </div>
            <div className="flex flex-col gap-y-4 lg:gap-0">
              <span className="text-label-md">(808) 998-34256</span>
              <span className="text-body-lg">
                Assistance hours:
                <br /> Monday - Friday 6 am to 8 pm EST
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
