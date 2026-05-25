'use client';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { CodeBoxInput, Logo } from 'components';
import Input from '@/app/_components/input/Input';
import Checkbox from '@/app/_components/checkbox';
import Button from '@/app/_components/Button';

import {
  IconAppleFill,
  IconEnvelope,
  IconGoogle,
  IconLock,
} from 'magicoon';

import FormHeader from '@/app/_components/login-signup/FormHeader';
import LoginSlider from '../_components/login-signup/LoginSlider';
import VerifyCode from '../_components/login-signup/VerifyCode';
import useTimerCode from '../_hooks/useTimer';
import { useRouter } from 'next/navigation';
import VerifyCodeInput from '../_components/input/VerifyCodeInput';

function Page() {
  const router = useRouter();

  let email = useRef('');
  const { time, startTimer, resendCode } = useTimerCode({});

  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((step) => step + 1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    nextStep();
    startTimer();
  }
  function handleVerifyCode() {
    router.push('/');
  }
  const steps = {
    1: (
      <div className='flex h-full flex-col gap-y-8'>
        <form
          className='space-y-8'
          onSubmit={handleSubmit(onSubmit)}>
          <FormHeader size='sm'>
            <FormHeader.Title>Login</FormHeader.Title>
            <FormHeader.Description>
              Please login to continue to your account.
            </FormHeader.Description>
          </FormHeader>
          <div className='space-y-8'>
            <Input
              type='email'
              label='Email'
              placeholder='ex: example@domain.com'
              icon={<IconEnvelope />}
              register={{ ...register('email') }}
            />
            <Input
              type='password'
              label='Password'
              placeholder='Create a password'
              icon={<IconLock />}
              register={{ ...register('password') }}
            />
          </div>
          <div className='flex items-center justify-between'>
            <Checkbox register={{ ...register('keepLogin') }}>
              Keep me logged in
            </Checkbox>
            <Link
              href='/forgot-password'
              className='text-body-xsm text-primary-500'>
              Forgot password?
            </Link>
          </div>
          <Button type='submit' size='sm' className='w-full'>
            Sign in
          </Button>
        </form>
        <div className='relative flex items-center justify-center gap-x-2'>
          <span className='text-body-sm absolute bg-white px-2 text-neutral-700'>
            or
          </span>
          <div className='block h-0.5 w-full rounded-full bg-neutral-100'></div>
        </div>
        <div className='flex flex-col gap-2.5 md:flex-col'>
          <Button style='neutral' size='sm' className='w-full'>
            <IconAppleFill />
            Sign in with Apple
          </Button>
          <Button style='neutral' size='sm' className='w-full'>
            <IconGoogle />
            Sign in with Apple
          </Button>
        </div>
        <div className='flex items-center justify-center gap-x-1 md:py-1.5'>
          <span className='text-body-md text-neutral-500'>
            Need an account?
          </span>
          <Link
            className='text-body-sm text-primary-500 hover:underline'
            href='/signup'>
            Create one
          </Link>
        </div>
      </div>
    ),
    2: (
      <VerifyCode>
        <VerifyCodeInput
          time={time}
          resendCode={resendCode}
          email={watch('email')}>
          <CodeBoxInput onVerify={handleVerifyCode} />
        </VerifyCodeInput>
      </VerifyCode>
    ),
  };
  return (
    <section className='container h-dvh *:overflow-y-auto md:flex md:justify-between md:gap-x-8 md:overflow-hidden md:py-6'>
      <div className='md:1/2 flex h-full w-full flex-col md:pt-10 lg:w-122'>
        {steps[currentStep]}
      </div>

      <LoginSlider />
    </section>
  );
}

export default Page;
