import Image from "next/image";
import integration_image from "public/integration.webp";

function Integration() {
  return (
    <section className="container">
      <div className="relative flex justify-center items-center">
        <div className="absolute flex flex-col justify-center items-center w-1/2 sm:w-80 md:w-111 text-center">
          <span className="text-primary-500 text-title-3xsm sm:text-title-xsm uppercase">INTEGRATION</span>
          <h3 className="text-title-2sm sm:text-title-sm md:text-display-sm">Manage task in one platform</h3>
          <span className="text-body-sm text-neutral-600 md:text-body-lg">Orbitask absolutely works great with tools in your other existing platform.</span>
        </div>
        <Image className="mx-auto md:w-full lg:w-215 h-auto" src={integration_image} alt="img" />
      </div>
    </section>
  );
}
export default Integration;
