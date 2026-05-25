'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';

import useTimer from '@/app/_hooks/useTimer';
import useStep from '@/app/_hooks/useStep';

import FormHeader from '@/app/_components/login-signup/FormHeader';
import {
  Button,
  CodeBoxInput,
  Logo,
  Input,
  Checkbox,
  VerifyCodeInput,
  VerifyCode,
  LoginSlider,
  CreateWorkspaceForm,
  WorkspaceSetupForm,
  PreparingWorkspaceForm,
  InviteYourTeamMembers,
  SetupFirstProjectForm,
} from 'components';

import {
  IconEnvelope,
  IconLock,
  IconLogIn,
  IconUserAlt,
  IconArrowLeftSmall,
} from 'magicoon';

export default function Page() {
  const from = useForm();

  const { seconds, startTimer, resetTimer, isActive } =
    useTimer();
  const sendCode = () => {
    toast.success('code is 123456');
    startTimer();
  };
  const resendCode = () => {
    if (!isActive) {
      toast.success('code is 123456');
      toast.success('resend code!');
      resetTimer();
      startTimer();
    }
  };

  const { currentStep, nextStep, previousStep } = useStep();
  const maxStep = 7;

  // Handle Submit
  function onSubmit(data) {
    console.log(data);
    nextStep();
    sendCode();
  }
  function handleVerifyCode() {
    toast.success('signup success');
    nextStep();
  }

  return (
    <>
      <Toaster position='top-center' />
      <section className='container h-dvh *:overflow-y-auto md:flex md:justify-between md:gap-x-8 md:overflow-hidden md:py-6'>
        <div className='md:1/2 flex h-full w-full flex-col md:pt-10 lg:w-122'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              {currentStep > 3 && (
                <Button
                  style='neutral-text'
                  onClick={previousStep}>
                  <IconArrowLeftSmall />
                </Button>
              )}
              <Link href='/'>
                <Logo
                  type='blue'
                  className='hidden h-7 md:block'
                />
                <Logo
                  type='blue'
                  variant='mark'
                  className='hidden h-7 sm:block md:hidden'
                />
              </Link>
            </div>
            {currentStep > 2 && (
              <Button style='text' to='/dashboard'>
                Skip and start
              </Button>
            )}
          </div>
          <div className='h-full'>
            {currentStep === 1 && (
              <form
                className='mt-[15dvh] space-y-8'
                onSubmit={from.handleSubmit(onSubmit)}>
                <FormHeader size='sm'>
                  <FormHeader.Title className='md:text-display-md'>
                    Welcome to{' '}
                    <span className='text-primary-500'>
                      Orbitask
                    </span>
                  </FormHeader.Title>
                  <FormHeader.Description>
                    Please enter your email address to create an
                    account.
                  </FormHeader.Description>
                </FormHeader>
                <div className='space-y-3'></div>
                <Input
                  label='Full name'
                  required={true}
                  placeholder='ex: John Doe'
                  icon={<IconUserAlt />}
                  register={{
                    ...from.register('fullName'),
                  }}
                />
                <Input
                  type='email'
                  label='Email'
                  required={true}
                  placeholder='ex: example@domain.com'
                  icon={<IconEnvelope />}
                  register={{ ...from.register('email') }}
                />
                <Input
                  type='password'
                  label='Password'
                  required={true}
                  placeholder='Create a password'
                  icon={<IconLock />}
                  register={{
                    ...from.register('password'),
                  }}
                />
                <Checkbox required={true} className='p-2'>
                  I have read and agree to the &nbsp;
                  <Link
                    className='text-primary-500 hover:underline'
                    href='/si'>
                    User Agreement
                  </Link>
                  &nbsp; & &nbsp;
                  <Link
                    className='text-primary-500 hover:underline'
                    href='/si'>
                    Privacy Policy
                  </Link>
                </Checkbox>
                <Button
                  type='submit'
                  size='sm'
                  className='w-full'>
                  <IconLogIn />
                  Sign Up
                </Button>

                <div className='flex items-center justify-center gap-x-1 py-1.5'>
                  <span className='text-body-md'>
                    Already have an account?
                  </span>
                  <Link
                    className='text-body-sm text-primary-500 hover:underline'
                    href='/login'>
                    Sign in
                  </Link>
                </div>
              </form>
            )}
            {currentStep === 2 && (
              <VerifyCode>
                <VerifyCodeInput
                  seconds={seconds}
                  resendCode={resendCode}
                  email={from.watch('email')}>
                  <CodeBoxInput onVerify={handleVerifyCode} />
                </VerifyCodeInput>
              </VerifyCode>
            )}
            {currentStep === 3 && (
              <CreateWorkspaceForm
                currentStep={currentStep}
                maxStep={maxStep}
                nextStep={nextStep}
              />
            )}
            {currentStep === 4 && (
              <WorkspaceSetupForm
                currentStep={currentStep}
                maxStep={maxStep}
                nextStep={nextStep}
                previousStep={previousStep}
              />
            )}
            {currentStep === 5 && (
              <PreparingWorkspaceForm
                currentStep={currentStep}
                maxStep={maxStep}
                nextStep={nextStep}
                previousStep={previousStep}
              />
            )}
            {currentStep === 6 && (
              <SetupFirstProjectForm
                currentStep={currentStep}
                maxStep={maxStep}
                nextStep={nextStep}
                previousStep={previousStep}
              />
            )}
            {currentStep === 7 && (
              <InviteYourTeamMembers
                currentStep={currentStep}
                maxStep={maxStep}
                nextStep={nextStep}
                previousStep={previousStep}
              />
            )}
          </div>
        </div>
        <LoginSlider />
      </section>
    </>
  );
}
