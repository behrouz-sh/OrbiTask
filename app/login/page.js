"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Logo from "ui/logo";
import Input from "ui/input";
import Checkbox from "ui/checkbox";
import Button from "ui/button";

import { IconEnvelope, IconGoogle, IconLock } from "magicoon/regular";
import { IconAppleFill } from "magicoon/filled";

import FormHeader from "components/layouts/FormHeader";
import Verification from "components/layouts/sections/verification";

function Page() {
  const defaultTime = 30;
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(defaultTime);

  const nextStep = () => setStep((step) => step + 1);
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    nextStep();
    setTime(defaultTime);
    alert("welcome to Orbitask\n Orbitask Code: 123456");
  }
  return (
    <section className="container h-dvh md:py-6 md:flex md:justify-between md:gap-x-8 md:overflow-hidden *:overflow-y-auto">
      <div className="w-full h-full md:1/2 lg:w-122 md:pt-10 flex flex-col">
        <div className="hidden md:flex items-center justify-between">
          <Link href="/">
            <Logo type="blue" className="h-7" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-8 mt-5  pt-[14dvh] md:py-0 md:mt-[16dvh]">
          {step === 0 && (
            <div className="flex flex-col h-full gap-y-8 ">
              <FormHeader size="sm">
                <FormHeader.Title>Login</FormHeader.Title>
                <FormHeader.Description>Please login to continue to your account.</FormHeader.Description>
              </FormHeader>

              <div className="space-y-8">
                <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-8">
                    <Input type="email" label="Email" placeholder="ex: example@domain.com" icon={<IconEnvelope />} register={{ ...register("email") }} />
                    <Input type="password" label="Password" placeholder="Create a password" icon={<IconLock />} register={{ ...register("password") }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <Checkbox register={{ ...register("keepLogin") }}>Keep me logged in</Checkbox>
                    <Link href="/forgot-password" className="text-body-xsm text-primary-500">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" size="sm" className="w-full">
                    Sign in
                  </Button>
                </form>
                <div className="relative flex items-center justify-center gap-x-2">
                  <span className="text-body-sm text-neutral-700 absolute bg-white px-2">or</span>
                  <div className="h-0.5 bg-neutral-100 w-full block rounded-full"></div>
                </div>
                <div className="flex flex-col md:flex-col gap-2.5">
                  <Button style="neutral" size="sm" className="w-full">
                    <IconAppleFill />
                    Sign in with Apple
                  </Button>
                  <Button style="neutral" size="sm" className="w-full">
                    <IconGoogle />
                    Sign in with Apple
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-x-1 md:py-1.5">
                  <span className="text-body-md text-neutral-500">Need an account?</span>
                  <Link className="text-body-sm text-primary-500 hover:underline" href="/signup">
                    Create one
                  </Link>
                </div>
              </div>
            </div>
          )}
          {step === 1 && <Verification time={time} setTime={setTime} defaultTime={defaultTime} />}
        </div>
      </div>

      <div className="hidden md:block bg-primary-200 h-full rounded-3xl w-190"></div>
    </section>
  );
}

export default Page;
