import Button from "ui/button";

export default async function NotFound() {
  return (
    <div className=" py-5 text-center h-dvh bg-primary-50">
      <div className="container absolute mx-auto  inset-0 m-auto size-fit flex items-center bg-white shadow-medium flex-col gap-y-8 p-8 lg:p-10 lg:w-1/2 border border-primary-500 rounded-4xl">
        <div className="">
          <h2 className="lg:text-display-md text-display-sm text-primary-500">Page Not Found</h2>
          <p className="lg:text-body-lg text-body-sm text-neutral-600">The requested resource could not be found.</p>
        </div>
        <Button to="/" className="w-full sm:w-auto">
          Go back to Home
        </Button>
      </div>
    </div>
  );
}
