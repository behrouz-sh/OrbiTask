import Image from "next/image";
import { IconChartBarVertical, IconChat } from "magicoon/regular";
import aiFloat from "public/ai-float.webp";
import taskCard from "public/task-card.webp";

function WhyChooseOrbitask() {
  return (
    <section className="space-y-8 container">
      <div className="space-y-2 text-center">
        <span className="text-semantic-info-600 text-title-sm">About Us</span>
        <h2 className="text-display-sm lg:text-display-xlg">Why Choose Orbitask?</h2>
        <span className="text-body-md text-neutral-600 lg:text-body-lg">Designed to make teamwork effortless</span>
      </div>
      <div className="*:relative gap-6 grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 *:shadow-medium lg:*:h-80 *:overflow-hidden">
        <div className="flex justify-center lg:justify-normal items-center lg:col-start-1 lg:col-end-3 row-start-2 lg:row-start-auto p-11.5 rounded-2xl lg:text-left text-center">
          <div className="-top-1/2 -right-1/12 absolute bg-primary-500/64 blur-[240px] rounded-full w-69.5 h-66.5"></div>
          <Image src={aiFloat} alt="X" className="right-0 bottom-0 lg:-bottom-1/5 left-0 lg:left-auto -z-10 absolute opacity-10 lg:opacity-60 xl:opacity-100 border-10 border-primary-50 rounded-2xl w-full lg:w-75 -rotate-20" />
          <div className="space-y-6 w-95.75">
            <h4 className="text-title-md">Your Workspace is Ready!</h4>
            <p className="text-body-md text-neutral-600">Orbitask’s smart AI is here to help you plan, organize, and optimize your projects — all in one place.</p>
          </div>
        </div>
        <div className="flex flex-col lg:justify-between items-center gap-y-6 px-6 py-10 rounded-3xl lg:text-left text-center">
          <div className="-right-2/12 -bottom-1/2 absolute bg-primary-500/50 blur-[240px] rounded-full w-69.5 h-66.5"></div>
          <span className="border-4 border-primary-50 lg:border-10 rounded-2xl size-fit">
            <IconChartBarVertical className="bg-primary-500 p-2 rounded-[12.5px] size-16 xl:size-25 text-white" />
          </span>
          <div>
            <h4 className="text-title-md">Smart Insights</h4>
            <span className="text-body-md text-neutral-600">Track progress and boost performance with clean visual analytics.</span>
          </div>
        </div>
        <div className="flex flex-col lg:justify-between items-center px-6 py-10 rounded-3xl lg:text-left text-center">
          <div className="-right-2/12 -bottom-1/2 absolute bg-primary-500/50 blur-[240px] rounded-full w-69.5 h-66.5"></div>
          <span className="border-4 border-primary-50 lg:border-10 rounded-2xl size-fit">
            <IconChat className="bg-primary-500 p-2 rounded-[12.5px] size-16 xl:size-25 text-white" />
          </span>
          <div>
            <h4 className="text-title-md">Stay connected with Chat.</h4>
            <span className="text-body-md text-neutral-600">Message teammates instantly, share updates, and collaborate without switching apps.</span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-normal items-center lg:col-start-2 lg:col-end-4 p-11.5 rounded-2xl lg:text-left text-center">
          <div className="-top-1/2 -right-1/12 absolute bg-primary-500/64 blur-[240px] rounded-full w-69.5 h-66.5"></div>
          <Image src={taskCard} alt="X" className="lg:top-auto lg:right-[-3%] lg:-bottom-2/5 lg:left-auto -z-10 absolute inset-0 opacity-10 lg:opacity-30 xl:opacity-100 w-full lg:w-100 -rotate-20" />
          <div className="space-y-6 w-95.75">
            <h4 className="text-title-md">Manage Your Team Effortlessly</h4>
            <p className="text-body-md text-neutral-600">
              Assign roles, track progress, and stay connected — all in one place.
              <br /> Simple, powerful, and built for teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseOrbitask;
