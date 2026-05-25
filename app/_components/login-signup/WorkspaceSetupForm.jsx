'use client';
import { useForm } from 'react-hook-form';
import FormButtons from './FormButtons';
import FormHeader from './FormHeader';
import { Button, Progress, Select } from 'components';

export default function WorkspaceSetupForm({
  currentStep,
  maxStep,
  nextStep,
  previousStep,
}) {
  const { handleSubmit, register } = useForm();
  function onSubmit(data) {
    console.log(data);
    nextStep();
  }
  return (
    <form
      className='text-body-md space-y-[23.5dvh] select-none md:mt-[12dvh]'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-8'>
        <FormHeader>
          <FormHeader.Title>
            Getting your workspace ready
          </FormHeader.Title>
          <FormHeader.Description>
            Answer a few quick questions so we can personalize
            your Orbitask experience.
          </FormHeader.Description>
        </FormHeader>
        <Select
          label='What type of work do you manage?'
          options={[
            {
              value: '1',
              label: 'Brand Strategy & Positioning',
            },
            {
              value: '2',
              label: 'Optimizing SEO and Website Content',
            },
          ]}
          register={{ ...register('1') }}
        />
        <Select
          label='What are you currently working on?'
          options={[
            {
              value: '1',
              label: 'Creating an Email Marketing Workflow',
            },
            {
              value: '2',
              label: 'Optimizing SEO and Website Content',
            },
            {
              value: '3',
              label: 'Developing New Marketing Collateral',
            },
            {
              value: '4',
              label: 'Launching a Social Media Campaign',
            },
          ]}
          register={{ ...register('2') }}
        />
      </div>
      <FormButtons>
        <div className='flex gap-x-4'>
          <Button
            size='sm'
            style='outlined'
            className='w-2/12 md:hidden'
            onClick={previousStep}>
            Back
          </Button>
          <Button size='sm' className='w-10/12 md:w-full'>
            Next
          </Button>
        </div>
        <Progress value={currentStep} max={maxStep} />
      </FormButtons>
    </form>
  );
}
