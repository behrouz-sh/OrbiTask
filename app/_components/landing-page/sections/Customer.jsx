import {
  IconAirbnb,
  IconFitbit,
  IconNetflix,
  IconSlack,
  IconUber,
  IconGoogle,
} from 'icons';

export default function Customer() {
  return (
    <section className='bg-primary-50 overflow-hidden py-8 text-center'>
      <div className='container space-y-10'>
        <h3 className='text-title-md'>
          Trusted by the worl’d largest business
        </h3>
        {/* icons */}
        <div className='mobile-marquee relative flex items-center justify-between overflow-hidden text-neutral-600 sm:gap-x-8 md:justify-between lg:gap-x-0'>
          <IconSlack height='28px' />
          <IconNetflix height='24px' />
          <IconFitbit height='24px' />
          <IconGoogle height='32px' />
          <IconAirbnb height='32px' />
          <IconUber height='20px' />
        </div>
      </div>
    </section>
  );
}
