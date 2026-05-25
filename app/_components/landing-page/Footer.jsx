import { Logo, Button, Input } from 'components';
import {
  IconEnvelope,
  IconFacebook,
  IconFacebookFFill,
  IconFacebookFill,
  IconLinkedinFill,
  IconTwitterFill,
} from '../icons/magicoon';

function Footer() {
  const linksData = [
    {
      title: 'Product',
      links: [
        { link: '#', text: 'Features' },
        { link: '#', text: 'For Teams' },
        { link: '#', text: 'Learn' },
        { link: '#', text: 'Pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { link: '#', text: 'Overview & Updates' },
        { link: '#', text: 'Guides & Tutorials' },
        { link: '#', text: 'Overview & Updates' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { link: '#', text: 'Privacy Policy' },
        { link: '#', text: 'Terms & Conditions' },
      ],
    },
    {
      title: 'Contact us',
      links: [
        { link: '#', text: 'Orbitask@gmail.com' },
        { link: '#', text: '+133-394-3439-1435' },
      ],
    },
  ];
  return (
    <footer className='mt-16 space-y-20'>
      <div className='container flex flex-col justify-between gap-y-6 text-center md:text-left lg:flex-row'>
        <div className='flex h-auto flex-col-reverse justify-between gap-y-10 lg:w-100 lg:flex-col lg:gap-0 xl:w-113.75'>
          <div className='space-y-6'>
            <Logo
              className='mx-auto h-10 md:mx-0 lg:h-16'
              type='black-mix'
            />
            <p className='text-sm/6 text-neutral-700'>
              Orbitask was built for the way we work today. We
              create smarter, more connected workspaces around
              the world.
            </p>
          </div>
          <form
            action='#'
            className='hidden h-fit items-center justify-center gap-x-1.5 sm:flex lg:justify-start'>
            <Input
              type='email'
              size='sm'
              icon={<IconEnvelope />}
              placeholder='Enter Your Email'
              className='w-60! xl:min-w-79!'
            />
            <Button style='filled' size='sm'>
              Subscribe Now
            </Button>
          </form>
        </div>
        <div className='flex flex-wrap justify-center gap-x-16 gap-y-8 md:justify-start lg:gap-x-6 xl:gap-x-12'>
          {linksData.map((e) => (
            <div className='space-y-6'>
              <span className='block text-xl/9 font-semibold'>
                {e.title}
              </span>
              <ul className='space-y-6 text-sm/4 text-neutral-700'>
                {e.links.map((l) => (
                  <li>
                    <a href={l.link}>{l.text}</a>{' '}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-primary-500 pt-12.5'>
        <div className='container'>
          <div className='mb-2 flex items-center justify-between gap-x-8'>
            <Logo className='h-10 lg:h-16' type='white' />
            <div className='flex items-center justify-end gap-x-4 text-white md:justify-center md:gap-x-6.5 **:[&_svg]:size-7.5'>
              <a href='#'>
                <IconFacebookFFill />
              </a>
              <a href='#'>
                <IconTwitterFill />
              </a>
              <a href='#'>
                <IconLinkedinFill />
              </a>
            </div>
          </div>
          <hr className='text-white' />
          <span className='mx-auto block py-6 text-center text-sm text-white'>
            Non Copyrighted &copy; 2025 Design and upload by
            Orbitask
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
