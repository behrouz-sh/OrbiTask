import Logo from "ui/logo";
import { StoryPattern } from "components/icons/general";

function StoryOfOrbitask() {
  return (
    <section className="space-y-5 lg:space-y-16 container">
      <div className="space-y-2 text-center">
        <h2 className="text-display-sm lg:text-display-xlg">What is the story of Orbitask?</h2>
        <p className="mx-auto max-w-157.5 text-body-md text-neutral-600 lg:text-body-lg">Orbitask is more than a project; it’s the beginning of something bigger — a smarter way to work, connect, and grow. </p>
      </div>
      <div className="relative items-center grid grid-cols-4 mx-auto w-[80%] h-80 lg:h-100">
        <div className="z-10 flex flex-col items-center gap-y-1 lg:gap-y-6 translate-y-11 lg:translate-y-13">
          <span className="text-body-xsm lg:text-body-md text-nowrap">User Experience</span>
          <div className="flex flex-col justify-center items-center gap-y-4 text-primary-500 rotate-180">
            <Logo variant="mark" type="blue" size={75} className="size-12 lg:size-18.75 rotate-170" />
            <StoryPattern className="h-19 lg:h-auto" />
          </div>
        </div>
        <div className="z-10 flex flex-col items-center gap-y-1 lg:gap-y-6 -translate-y-11 lg:-translate-y-13">
          <div className="flex flex-col justify-center items-center gap-y-4 text-primary-500">
            <Logo variant="mark" type="blue" size={75} className="size-12 lg:size-18.75 rotate-170" />
            <StoryPattern className="h-19 lg:h-auto" />
          </div>
          <span className="text-body-xsm lg:text-body-md text-nowrap">Product Structure</span>
        </div>
        <div className="z-10 flex flex-col items-center gap-y-1 lg:gap-y-6 translate-y-11 lg:translate-y-13">
          <span className="text-body-xsm lg:text-body-md text-nowrap">Platform Development</span>
          <div className="flex flex-col justify-center items-center gap-y-4 text-primary-500 rotate-180">
            <Logo variant="mark" type="blue" size={75} className="size-12 lg:size-18.75 rotate-170" />
            <StoryPattern className="h-19 lg:h-auto" />
          </div>
        </div>
        <div className="z-10 flex flex-col items-center gap-y-1 lg:gap-y-6 -translate-y-11 lg:-translate-y-13">
          <div className="flex flex-col justify-center items-center gap-y-4 text-primary-500">
            <Logo variant="mark" type="blue" size={75} className="size-12 lg:size-18.75 rotate-170" />
            <StoryPattern className="h-19 lg:h-auto" />
          </div>
          <span className="text-body-xsm lg:text-body-md text-nowrap">Launch & Growth</span>
        </div>

        <span className="block right-0 left-0 z-0 absolute bg-[#454545] mx-auto w-full h-1"></span>
      </div>
    </section>
  );
}

export default StoryOfOrbitask;
