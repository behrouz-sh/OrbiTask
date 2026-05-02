import Image from "next/image";
import Button from "ui/button";
import taskCard from "public/task-card.webp";

function GalaxyView() {
  return (
    <section className="flex md:flex-row flex-row-reverse justify-between items-center gap-x-3 md:gap-x-13 container">
      <Image className="hidden md:block w-80 lg:w-120 xl:w-170 h-auto" src={taskCard} alt="image" placeholder="blur" />
      <div className="space-y-6 max-w-129.25">
        <div className="space-y-2">
          <h2 className="text-display-sm lg:text-display-lg">Work together</h2>
          <span className="text-body-sm text-neutral-600 lg:text-body-lg">Collaborate in real time, share files, and let Orbi AI help your team stay organized and productive.</span>
        </div>
        <Button style="filled" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default GalaxyView;
