import Image from "next/image";
import Logo from "ui/logo";
import heroImage from "public/about-hero.webp";

function AboutUsHero() {
  return (
    <section className="z-0 relative flex justify-center items-center -mt-21.5 w-full h-[80dvh] sm:h-120 lg:h-158.5">
      <Image className="w-full h-full object-center object-cover" src={heroImage} alt="hero image" />
      <div className="absolute inset-0 bg-[#111]/70 bg-[linear-gradient(to_bottom,transparent_80%,rgb(13,13,13)_100%)]"></div>
      <div className="absolute space-y-4 lg:space-y-8 text-white text-center">
        <div className="flex justify-center items-center gap-x-1 text-display-sm lg:text-display-lg">
          <span>Ab</span>
          <Logo variant="mark" type="blue" className="size-10 lg:size-18 -rotate-14" />
          <span>ut us</span>
        </div>
        <p className="px-5 max-w-147 lg:max-w-247 text-body-sm lg:text-body-lg">
          Welcome to Orbitask – your all-in-one platform for managing projects, tasks, and teamwork effortlessly. Whether you're organizing workflows, tracking progress, or collaborating with your team, Orbitask helps you stay focused and get things done smarter.
          <br /> Our goal is simple: make productivity intuitive, flexible, and enjoyable.
        </p>
      </div>
    </section>
  );
}
export default AboutUsHero;
