'use client';
import { useEffect } from 'react';

import Button from '@/app/_components/Button';

import FormHeader from '@/app/_components/login-signup/FormHeader';
import NumberForm from '@/app/_components/input/CodeBoxInput';

function Verification({
  time,
  setTime,
  defaultTime = 30,
  nextStep,
}) {
  useEffect(() => {
    if (time >= 1) {
      const internal = setInterval(
        () => setTime((time) => time - 1),
        1000
      );
      return () => clearInterval(internal);
    }
  }, [time, setTime]);

  const resendCode = () => {
    alert('welcome to Orbitask\n Orbitask Code: 123456');
    setTime(defaultTime);
  };
  return (
    <div div className='space-y-8'>
      <div className='space-y-6'>
        <div className='space-y-0.5'>
          <span className='text-headline-xsm block'>
            Please enter the Verification code sent to
          </span>
          <span className='text-body-sm block text-neutral-600'>
            LucasBennett2002@gmail.com
          </span>
        </div>
        <NumberForm />
        <div>
          <div className='text-body-sm flex justify-between px-4'>
            <span className='text-neutral-700'>
              Didn’t receive the code?
            </span>
            <span className='text-neutral-500'>
              {Math.floor(time / 60)
                .toString()
                .padStart(2, '0')}
              :
              {Math.floor(time % 60)
                .toString()
                .padStart(2, '0')}
            </span>
          </div>
          {time === 0 && (
            <Button
              size='sm'
              style='neutral-text'
              onClick={resendCode}>
              Resend
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verification;
