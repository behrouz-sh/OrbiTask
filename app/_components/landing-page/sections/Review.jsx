'use client';
import Image from 'next/image';

// swiperJS
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeaderSection from './HeaderSection';
import UserComment from '../UserComment';

// images
import userCommentProfile_1 from 'public/user-comment-profile-1.png';
import userCommentProfile_2 from 'public/user-comment-profile-2.png';
import userCommentProfile_3 from 'public/user-comment-profile-3.png';
import sliderImage from 'public/slider-img.webp';

const sliderData = [
  {
    profile: userCommentProfile_1,
    name: ' Lena K., UX Designer, Germany',
    comment:
      '“The platform makes remote teamwork feel effortless.”',
  },
  {
    profile: userCommentProfile_2,
    name: 'James R., Product Manager, USA',
    comment:
      '“Our team productivity improved dramatically after switching to this tool.”',
  },
  {
    profile: userCommentProfile_3,
    name: 'Hiro T., Marketing Lead, Japan',
    comment:
      '“It’s never been this easy to brainstorm with a global team.”',
  },
];
export default function Review() {
  return (
    <section className='space-y-8'>
      <HeaderSection className='text-center'>
        <HeaderSection.Title>
          Work from{' '}
          <span className='text-primary-500'>Anywhere</span>
        </HeaderSection.Title>
        <HeaderSection.Description className='text-headline-sm lg:text-headline-lg'>
          Connect. Collaborate.
          <br /> Create — no matter where you are in the world.
        </HeaderSection.Description>
      </HeaderSection>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className='h-fit w-full md:container md:mx-auto'
        loop={true}>
        {sliderData.map((slider) => (
          <SwiperSlide>
            <UserComment
              profileUrl={slider.profile}
              name={slider.name}
              comment={slider.comment}
            />
            <Image
              src={sliderImage}
              alt='img'
              className='h-100 w-full object-cover sm:h-auto'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
