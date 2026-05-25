import Image from 'next/image';
import { IconQuotation } from 'icons';

export default function UserComment({
  profileUrl,
  name,
  comment,
}) {
  return (
    <div className='shadow-high absolute inset-0 m-auto h-fit w-3/4 rounded-2xl bg-white px-4 pt-6 pb-4 text-center sm:w-1/2 sm:px-8 lg:w-122 lg:px-10 lg:pt-9 lg:pb-6'>
      <Image
        src={profileUrl}
        alt='profile'
        className='bg-primary-100 absolute -top-1/4 right-0 left-0 mx-auto size-24 rounded-full border-8 lg:size-32 lg:border-14'
      />
      <IconQuotation className='text-neutral-100' />
      <div className='space-y-1 lg:space-y-2'>
        <span className='text-title-2xsm sm:text-title-xsm lg:text-title-md block'>
          {name}
        </span>
        <span className='text-headline-xsm lg:text-headline-sm block text-neutral-600'>
          {comment}
        </span>
      </div>
    </div>
  );
}
