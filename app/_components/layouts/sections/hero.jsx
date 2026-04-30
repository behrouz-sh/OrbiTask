import Image from "next/image";
import Button from "ui/button";
import { IconArrowRight, IconHand } from "magicoon/regular";
import heroImage from "public/image-hero.png";

function Hero() {
  return (
    <section className="flex items-center gap-x-3 md:gap-x-0 pt-9 pb-6 container">
      <div className="flex flex-col gap-y-6 lg:gap-y-8">
        <h1 className="text-display-sm lg:text-display-lg">A simple project management tool to manage anything!</h1>
        <span className="text-body-sm lg:text-body-lg">Keep every project, client, and deadline moving in sync from one organized space.</span>

        <div className="flex flex-col items-center gap-y-2 w-fit">
          <Button style="filled" size="lg" icon={true}>
            Start from here. It&apos;s Free
            <IconArrowRight />
          </Button>
          <span className="text-body-sm text-neutral-600">Get Started Without a Credit Card</span>
        </div>

        <div className="flex gap-x-2.5">
          <IconHand className="my-0.5 size-6 text-primary-500" />
          <span className="text-body-md text-neutral-600">
            <span className="text-primary-500">Start scrolling</span> to see our features
          </span>
        </div>
      </div>
      <Image className="hidden md:block w-5/12 md:w-100 lg:w-130 xl:w-180 h-auto" src={heroImage} alt="hero image" />
    </section>
  );
}

export default Hero;
