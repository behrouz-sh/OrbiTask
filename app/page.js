import {
  Header,
  Hero,
  Customer,
  Features,
  GalaxyView,
  Integration,
  Description,
  PricingAndPlans,
  Review,
  FAQ,
  Footer,
  Button,
  Logo,
} from 'components';

// images
import project_workload from 'public/project-workload.webp';
import project_progress from 'public/project-progress.webp';

export default function Home() {
  return (
    <>
      <Header />
      <main className='space-y-16'>
        <Hero />
        <Customer />
        <Features />
        <GalaxyView />
        <Description>
          <Description.Image src={project_progress} />
          <div className='space-y-6'>
            <Description.Title>
              Easy manage progres your project
            </Description.Title>
            <Description.Description>
              No more scattered tools or missing updates. With
              this platform, you can track project progress,
              manage tasks, and collaborate with your team—all
              in one place. Stay organized, stay focused, and
              move your project forward with confidence.
            </Description.Description>
            <div className='flex gap-x-4 *:flex *:flex-col md:gap-x-12'>
              <div>
                <span className='text-headline-sm lg:text-headline-md font-medium'>
                  900+
                </span>
                <span className='text-body-sm md:text-body-md font-medium text-neutral-600'>
                  Active users
                </span>
              </div>
              <div>
                <span className='text-headline-sm lg:text-headline-md font-medium'>
                  250+
                </span>
                <span className='text-body-sm md:text-body-md font-medium text-neutral-600'>
                  Design Team
                </span>
              </div>
              <div>
                <span className='text-headline-sm lg:text-headline-md font-medium'>
                  1200+
                </span>
                <span className='text-body-sm md:text-body-md font-medium text-neutral-600'>
                  Download desktop
                </span>
              </div>
            </div>
            <Button>Explore Now</Button>
          </div>
        </Description>
        <Integration />

        <Description className='flex-row-reverse'>
          <Description.Image src={project_workload} />
          <div className='space-y-6 lg:space-y-14'>
            <Description.Title>
              Visualize your project with powerful analytics
            </Description.Title>
            <Description.Description>
              Get a clear, real-time overview of your project
              performance through interactive charts and smart
              insights. From task completion trends to team
              productivity and workflow bottlenecks, everything
              you need to make better decisions is right in
              front of you.
            </Description.Description>
            <Button>Explore Now</Button>
          </div>
        </Description>
        <PricingAndPlans />
        <Review />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
