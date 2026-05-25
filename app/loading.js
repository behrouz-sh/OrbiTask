import { Logo } from 'components';

function Loading() {
  return (
    <div className='bg-primary-50/50 fixed inset-0 z-100 flex items-center justify-center backdrop-blur-xl'>
      <Logo
        type='blue'
        variant='mark'
        className='size-16 animate-spin'
      />
    </div>
  );
}

export default Loading;
