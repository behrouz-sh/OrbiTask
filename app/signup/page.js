"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "ui/button";
import Logo from "ui/logo";
import Input from "ui/input";
import Checkbox from "ui/checkbox";
import Textarea from "ui/textarea";
import Select from "ui/select";
import Progress from "ui/Progress";

import AlertUnderInput from "components/layouts/AlertUnderInput";

import { IconArrowLeftSmall, IconEnvelope, IconImagePlus, IconLock, IconLogIn, IconUserAlt } from "magicoon/regular";

import Verification from "components/layouts/sections/verification";
import FormHeader from "components/layouts/FormHeader";
import FormButtons from "components/layouts/FormButtons";

function Page() {
  const maxStep = 7;
  const defaultTime = 30;
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(defaultTime);

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const nextStep = () => setStep((step) => step + 1);
  const previousStep = () => setStep((step) => step - 1);

  function onSubmit(data) {
    nextStep();
    console.log(data);
    setTime(defaultTime);
    alert("welcome to Orbitask\n Orbitask Code: 123456");
  }
  return (
    <section className="container h-dvh md:py-6 md:flex md:justify-between md:gap-x-8 md:overflow-hidden *:overflow-y-auto">
      <div className="w-full h-full md:1/2 lg:w-122 md:pt-10 flex flex-col">
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center">
            {step > 2 && (
              <Button style="neutral-text" onClick={previousStep}>
                <IconArrowLeftSmall />
              </Button>
            )}
            <Link href="/">
              <Logo type="blue" className="h-7" />
            </Link>
          </div>
          {step > 1 && (
            <Button style="text" to="/">
              Skip and start
            </Button>
          )}
        </div>
        <div className={`flex flex-col gap-y-8 mt-5  pt-[14dvh] md:py-0 ${step === 0 || step === 1 || step === 6 ? "md:mt-[16dvh]" : step === 2 || step === 5 ? "md:mt-[6.5dvh]" : step === 3 || step === 4 ? "md:mt-[11.75dvh]" : ""}`}>
          {step === 0 && (
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <FormHeader size="sm">
                <FormHeader.Title className="md:text-display-md">
                  Welcome to <span className="text-primary-500">Orbitask</span>
                </FormHeader.Title>
                <FormHeader.Description>Please enter your email address to create an account.</FormHeader.Description>
              </FormHeader>
              <div className="space-y-3"></div>
              <Input label="Full name" required={true} placeholder="ex: John Doe" icon={<IconUserAlt />} register={{ ...register("fullName") }} />
              <Input type="email" label="Email" required={true} placeholder="ex: example@domain.com" icon={<IconEnvelope />} register={{ ...register("email") }} />
              <Input type="password" label="Password" required={true} placeholder="Create a password" icon={<IconLock />} register={{ ...register("password") }} />
              {/* <Checkbox required={true} className="p-2" register={{ ...register("agree") }}>
                I have read and agree to the &nbsp;
                <Link className="text-primary-500 hover:underline" href="/si">
                  User Agreement
                </Link>
                &nbsp; & &nbsp;
                <Link className="text-primary-500 hover:underline" href="/si">
                  Privacy Policy
                </Link>
              </Checkbox> */}
              <Button type="submit" size="sm" className="w-full">
                <IconLogIn />
                Sign Up
              </Button>

              <div className="flex items-center justify-center gap-x-1 py-1.5">
                <span className="text-body-md">Already have an account?</span>
                <Link className="text-body-sm text-primary-500 hover:underline" href="/login">
                  Sign in
                </Link>
              </div>
            </form>
          )}
          {step === 1 && <Verification time={time} setTime={setTime} nextStep={nextStep} defaultTime={defaultTime} />}

          {step === 2 && (
            <form className="space-y-8">
              <FormHeader>
                <FormHeader.Title>Create a new workspace</FormHeader.Title>
                <FormHeader.Description>Your Orbitask account has been successfully verified. Next, provide your organization’s name and address to proceed.</FormHeader.Description>
              </FormHeader>
              <div className="flex items-center flex-col mb-12">
                <div className="relative bg-primary-50 size-25 rounded-full">
                  <IconImagePlus className="size-8 text-primary-500 absolute inset-0 m-auto" />
                  <input type="file" className="opacity-0 rounded-full absolute inset-0 m-auto" />
                </div>
                <AlertUnderInput text="Upload your workspace logo or image" />
              </div>
              <Input label="Workspace Name" required={true} placeholder="ex: Orbitask Team" />
              <Input label="Custom workspace URL" placeholder="ex: your-workspace" />
              <Textarea label="Description" placeholder="ex: A workspace for managing Orbitask projects" />

              <FormButtons>
                <Button size="sm" className="w-full" onClick={nextStep}>
                  Next
                </Button>
                <Progress value={step} max={maxStep} />
              </FormButtons>
            </form>
          )}
          {step === 3 && (
            <form action="" className="space-y-[23.5dvh] text-body-md select-none">
              <div className="space-y-8">
                <FormHeader>
                  <FormHeader.Title>Getting your workspace ready</FormHeader.Title>
                  <FormHeader.Description>Answer a few quick questions so we can personalize your Orbitask experience.</FormHeader.Description>
                </FormHeader>
                <Select
                  label="What type of work do you manage?"
                  options={[
                    { value: "1", label: "Brand Strategy & Positioning" },
                    { value: "2", label: "Optimizing SEO and Website Content" },
                    // { value: "3", label: "Developing New Marketing Collateral" },
                    // { value: "4", label: "Launching a Social Media Campaign" },
                  ]}
                />
                <Select
                  label="What are you currently working on?"
                  options={[
                    { value: "1", label: "Creating an Email Marketing Workflow" },
                    { value: "2", label: "Optimizing SEO and Website Content" },
                    { value: "3", label: "Developing New Marketing Collateral" },
                    { value: "4", label: "Launching a Social Media Campaign" },
                  ]}
                />
              </div>
              <FormButtons>
                <div className="flex gap-x-4">
                  <Button size="sm" style="outlined" className="w-2/12 md:hidden" onClick={previousStep}>
                    Back
                  </Button>
                  <Button size="sm" className="w-10/12  md:w-full" onClick={nextStep}>
                    Next
                  </Button>
                </div>
                <Progress value={step} max={maxStep} />
              </FormButtons>
            </form>
          )}
          {step === 4 && (
            <form action="" className="space-y-[23.5dvh] text-body-md select-none">
              <div className="space-y-8">
                <FormHeader>
                  <FormHeader.Title>Preparing your workspace</FormHeader.Title>
                  <FormHeader.Description>Great, you're here to manage Support and are currently working on Customer Success Management.</FormHeader.Description>
                </FormHeader>
                <Select
                  label="What is your company industry?"
                  options={[
                    { value: "1", label: "Brand Strategy & Positioning" },
                    { value: "2", label: "Optimizing SEO and Website Content" },
                    // { value: "3", label: "Developing New Marketing Collateral" },
                    // { value: "4", label: "Launching a Social Media Campaign" },
                  ]}
                />
                <Select
                  label="What are you currently working on?"
                  options={[
                    { value: "1", label: "Creating an Email Marketing Workflow" },
                    { value: "2", label: "Optimizing SEO and Website Content" },
                    { value: "3", label: "Developing New Marketing Collateral" },
                    { value: "4", label: "Launching a Social Media Campaign" },
                  ]}
                />
              </div>
              <FormButtons>
                <div className="flex gap-x-4">
                  <Button size="sm" style="outlined" className="w-2/12 md:hidden" onClick={previousStep}>
                    Back
                  </Button>
                  <Button size="sm" className="w-10/12  md:w-full" onClick={nextStep}>
                    Next
                  </Button>
                </div>
                <Progress value={step} max={maxStep} />
              </FormButtons>
            </form>
          )}
          {step === 5 && (
            <form action="" className="space-y-8">
              <FormHeader>
                <FormHeader.Title>Preparing your workspace</FormHeader.Title>
                <FormHeader.Description>Enter a name to create your first project in Orbitask.</FormHeader.Description>
              </FormHeader>
              <div className="flex items-center flex-col gap-y-2">
                <div className="size-25 bg-primary-50 text-label-lg uppercase flex items-center justify-center rounded-full">
                  <span>or</span>
                </div>
                <span className="text-title-sm text-neutral-600">Orbitask</span>
              </div>
              <Input label="Project Name" required={true} placeholder="ex: Marketing Website Redesign" />
              <Input type="text-area" massage="this is a labla" maxLength={50} label="Description" placeholder="ex: A project to revamp the company’s website" />
              <Input label="Board" placeholder="ex: UI Team" info="A default board named “Deafult Board” will be created automatically" />
              <FormButtons>
                <div className="flex gap-x-4 md:mb-6">
                  <Button size="sm" style="outlined" className="w-2/12 md:hidden" onClick={previousStep}>
                    Back
                  </Button>
                  <Button size="sm" className="w-10/12  md:w-full" onClick={nextStep}>
                    Create Project
                  </Button>
                </div>
                <Progress value={step} max={maxStep} />
              </FormButtons>
            </form>
          )}
          {step === 6 && (
            <form action="" className="space-y-8">
              <FormHeader>
                <FormHeader.Title>Invite your Team Members</FormHeader.Title>
                <FormHeader.Description>Add your teammates to collaborate and start building your projects together in Orbitask.</FormHeader.Description>
              </FormHeader>
              Enter a name to create your first project in Orbitask.
              <div className="space-y-8">
                <div className="space-y-2">
                  <Input icon={<IconEnvelope />} placeholder="ex: example@domain.com" />
                  <Input icon={<IconEnvelope />} placeholder="ex: example@domain.com" />
                  <Input icon={<IconEnvelope />} placeholder="ex: example@domain.com" />
                  <Button size="sm" style="neutral">
                    Add another
                  </Button>
                </div>
                <FormButtons>
                  <div className="flex gap-x-4 md:mb-6">
                    <Button size="sm" style="outlined" className="w-2/12 md:hidden" onClick={previousStep}>
                      Back
                    </Button>
                    <Button size="sm" className="w-10/12  md:w-full" onClick={nextStep} disable={true}>
                      Send Invite & continue
                    </Button>
                  </div>
                  <Progress value={step} max={maxStep} />
                </FormButtons>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="hidden md:block bg-primary-200 h-vh rounded-3xl w-190"></div>
    </section>
  );
}

export default Page;
