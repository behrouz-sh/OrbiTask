"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IconQuotation } from "components/icons/general";

import userCommentProfile from "public/user-comment-profile.png";
import sliderImage from "public/slider-img.png";

function Review() {
  return (
    <section className="space-y-8">
      <div className="mx-auto max-w-187.5 text-center container">
        <h2 className="text-display-sm lg:text-display-lg">
          Work from <span className="text-primary-500">Anywhere</span>
        </h2>
        <span className="space-y-2 text-headline-sm text-neutral-600 lg:text-headline-lg">
          Connect. Collaborate.
          <br /> Create — no matter where you are in the world.
        </span>
      </div>
      <Swiper modules={[Pagination, Navigation, Autoplay]} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false }} className="md:mx-auto w-full h-fit md:container" loop={true}>
        <SwiperSlide>
          <div className="absolute inset-0 bg-white shadow-high m-auto px-4 sm:px-8 lg:px-10 pt-6 lg:pt-9 pb-4 lg:pb-6 rounded-2xl w-3/4 sm:w-1/2 lg:w-122 h-fit text-center">
            <Image src={userCommentProfile} alt="img" className="-top-1/4 right-0 left-0 absolute bg-primary-100 mx-auto border-8 lg:border-14 rounded-full size-24 lg:size-32" />
            <IconQuotation className="text-neutral-100" />
            <div className="space-y-1 lg:space-y-2">
              <span className="block text-title-2xsm sm:text-title-xsm lg:text-title-md">Lena K., UX Designer, Germany</span>
              <span className="block text-headline-xsm text-neutral-600 lg:text-headline-sm">“The platform makes remote teamwork feel effortless.”</span>
            </div>
          </div>
          <Image src={sliderImage} alt="img" className="w-full h-100 sm:h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute inset-0 bg-white shadow-high m-auto px-4 sm:px-8 lg:px-10 pt-6 lg:pt-9 pb-4 lg:pb-6 rounded-2xl w-3/4 sm:w-1/2 lg:w-122 h-fit text-center">
            <Image src={userCommentProfile} alt="img" className="-top-1/4 right-0 left-0 absolute bg-primary-100 mx-auto border-8 lg:border-14 rounded-full size-24 lg:size-32" />
            <IconQuotation className="text-neutral-100" />
            <div className="space-y-1 lg:space-y-2">
              <span className="block text-title-2xsm sm:text-title-xsm lg:text-title-md">Lena K., UX Designer, Germany</span>
              <span className="block text-headline-xsm text-neutral-600 lg:text-headline-sm">“The platform makes remote teamwork feel effortless.”</span>
            </div>
          </div>
          <Image src={sliderImage} alt="img" className="w-full h-100 sm:h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute inset-0 bg-white shadow-high m-auto px-4 sm:px-8 lg:px-10 pt-6 lg:pt-9 pb-4 lg:pb-6 rounded-2xl w-3/4 sm:w-1/2 lg:w-122 h-fit text-center">
            <Image src={userCommentProfile} alt="img" className="-top-1/4 right-0 left-0 absolute bg-primary-100 mx-auto border-8 lg:border-14 rounded-full size-24 lg:size-32" />
            <IconQuotation className="text-neutral-100" />
            <div className="space-y-1 lg:space-y-2">
              <span className="block text-title-2xsm sm:text-title-xsm lg:text-title-md">Lena K., UX Designer, Germany</span>
              <span className="block text-headline-xsm text-neutral-600 lg:text-headline-sm">“The platform makes remote teamwork feel effortless.”</span>
            </div>
          </div>
          <Image src={sliderImage} alt="img" className="w-full h-100 sm:h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Review;
