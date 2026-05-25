import Image from 'next/image';
import integration_image from 'public/integration.webp';

function Integration() {
  return (
    <section className='container'>
      <div className='relative flex items-center justify-center'>
        <div className='absolute flex w-1/2 flex-col items-center justify-center text-center sm:w-80 md:w-111'>
          <span className='text-primary-500 text-title-3xsm sm:text-title-xsm uppercase'>
            INTEGRATION
          </span>
          <h3 className='text-title-2sm sm:text-title-sm md:text-display-sm'>
            Manage task in one platform
          </h3>
          <span className='text-body-sm md:text-body-lg text-neutral-600'>
            Orbitask absolutely works great with tools in your
            other existing platform.
          </span>
        </div>
        <Image
          className='mx-auto h-auto md:w-full lg:w-215'
          src={integration_image}
          alt='img'
        />
      </div>
    </section>
  );
}
export default Integration;
