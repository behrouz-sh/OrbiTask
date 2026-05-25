import {
  IconEnvelope,
  IconPhone,
  IconFaceGrinStarsFill,
} from 'magicoon';

function ContactInfo() {
  return (
    <section className='bg-primary-50 py-20'>
      <div className='container grid gap-y-10 text-center lg:grid-cols-2'>
        <div className='flex flex-col gap-y-6 lg:text-left'>
          <span className='text-body-lg'>Contact Info</span>
          <span className='text-display-sm lh:text-display-md'>
            We are always
            <IconFaceGrinStarsFill className='text-primary-500 mx-2 inline-block lg:mx-3.25 lg:size-16' />
            happy to
            <br className='hidden lg:block' /> assist you
          </span>
        </div>
        <div className='divide-5 grid gap-y-8 *:flex *:flex-col *:gap-y-2 md:grid-cols-2 md:text-left lg:*:gap-y-4 lg:*:px-8'>
          <div>
            <div>
              <div className='flex items-center justify-center gap-x-2 md:justify-normal'>
                <IconEnvelope className='size-6 shrink-0' />
                <span className='text-label-md'>
                  Email Address
                </span>
              </div>
              <span className='mx-auto mt-2 block h-0.75 w-1/3 rounded-full bg-neutral-950 md:mx-0 md:mt-2 lg:mt-6 lg:w-6.75'></span>
            </div>
            <div className='flex flex-col gap-y-4 lg:gap-0'>
              <span className='text-label-md'>
                help@info.com
              </span>
              <span className='text-body-lg'>
                Assistance hours:
                <br /> Monday - Friday 6 am to 8 pm EST
              </span>
            </div>
          </div>
          <div>
            <div>
              <div className='flex items-center justify-center gap-x-2 md:justify-normal'>
                <IconPhone className='size-6 shrink-0' />
                <span className='text-label-md'>Number</span>
              </div>
              <span className='mx-auto mt-2 block h-0.75 w-1/3 rounded-full bg-neutral-950 md:mx-0 md:mt-2 lg:mt-6 lg:w-6.75'></span>
            </div>
            <div className='flex flex-col gap-y-4 lg:gap-0'>
              <span className='text-label-md'>
                (808) 998-34256
              </span>
              <span className='text-body-lg'>
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
