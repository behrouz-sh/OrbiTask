'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Logo, Button, Input, FormHeader } from 'components';
import { IconEnvelope } from 'magicoon';

function Page() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((step) => step + 1);

  return (
    <section className='container flex h-dvh justify-between gap-x-8 py-6'>
      <div className='md:1/2 h-full w-full py-10 lg:w-122'>
        <Link href='/'>
          <Logo type='blue' className='h-7' />
        </Link>
        <div className='flex h-full flex-col gap-y-8 pt-37.5'>
          {step === 0 && (
            <form className='space-y-8'>
              <FormHeader size='sm'>
                <FormHeader.Title>
                  Forgot your password?
                </FormHeader.Title>
                <FormHeader.Description>
                  You’ll receive an email shortly with a link to
                  reset your password.
                </FormHeader.Description>
              </FormHeader>
              <Input
                label='Email'
                placeholder='ex: example@domain.com'
                icon={<IconEnvelope />}
              />
              <Button
                size='sm'
                className='w-full'
                onClick={nextStep}>
                Sign in
              </Button>
            </form>
          )}
          {step === 1 && (
            <FormHeader size='sm'>
              <FormHeader.Title>Request sent</FormHeader.Title>
              <FormHeader.Description>
                To reset your password, please enter the 6-digit
                verification code sent to your email address.
              </FormHeader.Description>
            </FormHeader>
          )}
          {step === 2 && (
            <form className='space-y-8'>
              <FormHeader size='sm'>
                <FormHeader.Title>
                  Reset Password
                </FormHeader.Title>
                <FormHeader.Description>
                  Enter a new password below to change your
                  password.
                </FormHeader.Description>
              </FormHeader>
              <Input
                label='New Password'
                placeholder='ex: example@domain.com'
                icon={<IconEnvelope />}
              />
              <Input
                label='Re-enter New Password'
                placeholder='ex: example@domain.com'
                icon={<IconEnvelope />}
              />
              <Button
                size='sm'
                className='w-full'
                onClick={nextStep}>
                Done
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className='bg-primary-200 hidden h-full w-190 rounded-3xl md:block'></div>
    </section>
  );
}

export default Page;
