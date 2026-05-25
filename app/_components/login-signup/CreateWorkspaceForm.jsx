'use client';
import { useForm } from 'react-hook-form';

import {
  AlertUnderInput,
  Button,
  Input,
  Progress,
} from 'components';

import { IconImagePlus } from 'magicoon';
import FormHeader from './FormHeader';
import FormButtons from './FormButtons';

export default function CreateWorkspaceForm({
  currentStep,
  maxStep,
  nextStep,
}) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    nextStep();
  }

  return (
    <form
      className='space-y-8 md:mt-[6.5dvh]'
      onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <FormHeader.Title>
          Create a new workspace
        </FormHeader.Title>
        <FormHeader.Description>
          Your Orbitask account has been successfully verified.
          Next, provide your organization’s name and address to
          proceed.
        </FormHeader.Description>
      </FormHeader>

      <div className='mb-12 flex flex-col items-center'>
        <div className='bg-primary-50 relative size-25 rounded-full'>
          <IconImagePlus className='text-primary-500 absolute inset-0 m-auto size-8' />
          <input
            type='file'
            className='absolute inset-0 m-auto rounded-full opacity-0'
          />
        </div>
        <AlertUnderInput text='Upload your workspace logo or image' />
      </div>

      <Input
        label='Workspace Name'
        required={true}
        placeholder='ex: Orbitask Team'
        register={{
          ...register('name'),
        }}
      />
      <Input
        label='Custom workspace URL'
        placeholder='ex: your-workspace'
        register={{
          ...register('url'),
        }}
      />
      <Input
        type='text-area'
        label='Description'
        placeholder='ex: A workspace for managing Orbitask projects'
        register={{
          ...register('description'),
        }}
      />

      <FormButtons>
        <Button size='sm' className='w-full'>
          Next
        </Button>
        <Progress value={currentStep} max={maxStep} />
      </FormButtons>
    </form>
  );
}
