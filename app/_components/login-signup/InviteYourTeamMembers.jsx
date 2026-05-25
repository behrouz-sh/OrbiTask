'use client';
import { useForm } from 'react-hook-form';
import { Button, Input, Progress } from '..';
import { IconEnvelope } from '../icons/magicoon';
import { useState } from 'react';
import FormButtons from './FormButtons';
import FormHeader from './FormHeader';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function InviteYourTeamMembers({
  currentStep,
  maxStep,
  nextStep,
  previousStep,
}) {
  const { handleSubmit, register } = useForm();
  const [countEmail, setCountEmail] = useState(3);
  const router = useRouter();

  function onSubmit(data) {
    console.log(data);
    router.push('/');
  }

  const isDisable =
    watch('email-1') || watch('email-2') || watch('email-3');
  return (
    <form
      className='space-y-8 md:mt-[16dvh]'
      onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <FormHeader.Title>
          Invite your Team Members
        </FormHeader.Title>
        <FormHeader.Description>
          Add your teammates to collaborate and start building
          your projects together in Orbitask.
        </FormHeader.Description>
      </FormHeader>

      <div className='space-y-8'>
        <div className='max-h-58.5 space-y-2 overflow-auto'>
          {Array(countEmail)
            .fill(null)
            .map((_, index) => (
              <Input
                key={index}
                type='email'
                icon={<IconEnvelope />}
                placeholder='ex: example@domain.com'
                register={{
                  ...register(`email-${index + 1}`),
                }}
              />
            ))}

          <Button
            type='button'
            size='sm'
            style='neutral'
            onClick={() => setCountEmail((e) => e + 1)}>
            Add another
          </Button>
        </div>
        <FormButtons>
          <div className='flex gap-x-4 md:mb-6'>
            <Button
              size='sm'
              style='outlined'
              className='w-2/12 md:hidden'
              onClick={previousStep}>
              Back
            </Button>
            <Button
              size='sm'
              className='w-10/12 md:w-full'
              disable={!isDisable}>
              Send Invite & continue
            </Button>
          </div>
          <Progress value={currentStep} max={maxStep} />
        </FormButtons>
      </div>
    </form>
  );
}
