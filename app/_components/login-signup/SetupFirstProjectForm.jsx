'use client';
import { useForm } from 'react-hook-form';

import FormButtons from './FormButtons';
import FormHeader from './FormHeader';
import { Button, Input, Progress } from 'components';

export default function SetupYourFirstProject({
  currentStep,
  maxStep,
  nextStep,
  previousStep,
}) {
  const { handleSubmit, register, watch } = useForm();
  const projectName = watch('name');
  function onSubmit(data) {
    console.log(data);
    nextStep();
  }

  return (
    <form
      className='flex h-full flex-col justify-end gap-y-8 pb-3.5'
      onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <FormHeader.Title>
          Set up your first project
        </FormHeader.Title>
        <FormHeader.Description>
          Enter a name to create your first project in Orbitask.
        </FormHeader.Description>
      </FormHeader>
      <div className='flex flex-col items-center gap-y-2'>
        <div className='bg-primary-50 text-label-lg flex size-25 items-center justify-center rounded-full uppercase'>
          <span>{projectName?.substring(0, 2) || 'or'}</span>
        </div>
        <span className='text-title-sm text-neutral-600'>
          {projectName || 'Orbitask'}
        </span>
      </div>
      <Input
        label='Project Name'
        required={true}
        placeholder='ex: Marketing Website Redesign'
        register={{
          ...register('name'),
        }}
      />
      <Input
        type='text-area'
        label='Description'
        placeholder='ex: A project to revamp the company’s website'
        register={{
          ...register('description'),
        }}
      />
      <Input
        label='Board'
        placeholder='ex: UI Team'
        info='A default board named “Deafult Board” will be created automatically'
        register={{
          ...register('board'),
        }}
      />
      <FormButtons>
        <div className='flex gap-x-4 md:mb-6'>
          <Button
            size='sm'
            style='outlined'
            className='w-2/12 md:hidden'
            onClick={previousStep}>
            Back
          </Button>
          <Button size='sm' className='w-10/12 md:w-full'>
            Create Project
          </Button>
        </div>
        <Progress value={currentStep} max={maxStep} />
      </FormButtons>
    </form>
  );
}
