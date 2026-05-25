import { Button } from 'components';

export default async function NotFound() {
  return (
    <div className='bg-primary-50 h-dvh py-5 text-center'>
      <div className='shadow-medium border-primary-500 absolute inset-0 container m-auto mx-auto flex size-fit flex-col items-center gap-y-8 rounded-4xl border bg-white p-8 lg:w-1/2 lg:p-10'>
        <div className=''>
          <h2 className='lg:text-display-md text-display-sm text-primary-500'>
            Page Not Found
          </h2>
          <p className='lg:text-body-lg text-body-sm text-neutral-600'>
            The requested resource could not be found.
          </p>
        </div>
        <Button to='/' className='w-full sm:w-auto'>
          Go back to Home
        </Button>
      </div>
    </div>
  );
}
