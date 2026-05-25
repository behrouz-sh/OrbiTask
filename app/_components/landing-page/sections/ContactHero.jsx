import Image from 'next/image';

// images
import heroImage from 'public/contact-hero.webp';

function ContactHero() {
  return (
    <section className='container'>
      <div className='space-y-2 text-center'>
        <span className='text-semantic-info-600 text-title-sm'>
          Contact Us
        </span>
        <h2 className='text-display-sm lg:text-display-xlg'>
          Get in touch with our team
        </h2>
        <span className='text-body-md lg:text-body-lg text-neutral-600'>
          We have the team and know-how to you scale 10x faster
        </span>
      </div>
      <Image src={heroImage} alt='hero' />
    </section>
  );
}

export default ContactHero;
