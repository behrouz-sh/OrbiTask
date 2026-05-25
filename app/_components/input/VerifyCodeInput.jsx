import { Button } from 'components';

export default function VerifyCodeInput({
  seconds,
  email = '',
  resendCode,
  children,
}) {
  return (
    <div className='space-y-6'>
      <div className='space-y-0.5'>
        <span className='text-headline-xsm block'>
          Please enter the Verification code sent to
        </span>
        <span className='text-body-sm block text-neutral-600'>
          {email}
        </span>
      </div>
      {children}
      <div>
        <div className='text-body-sm flex justify-between px-4'>
          <span className='text-neutral-700'>
            Didn’t receive the code?
          </span>
          <span className='text-neutral-500'>
            {Math.floor(seconds / 60)
              .toString()
              .padStart(2, '0')}
            :
            {Math.floor(seconds % 60)
              .toString()
              .padStart(2, '0')}
          </span>
        </div>
        {seconds === 0 && (
          <Button
            size='sm'
            style='neutral-text'
            onClick={resendCode}>
            Resend
          </Button>
        )}
      </div>
    </div>
  );
}
