"use client";
import { useState } from "react";
import Button from "ui/button";
import Link from "next/link";
import Input from "ui/input";
import Logo from "ui/logo";

import { IconEnvelope } from "magicoon/regular";

function Page() {
  const [step, setStep] = useState(0);

  const max_step = 7;
  function nextStep() {
    setStep((step) => step + 1);
  }
  return (
    <section className="container h-dvh py-6 flex justify-between gap-x-8">
      <div className="h-full w-full md:1/2 lg:w-122 py-10">
        <Link href="/">
          <Logo type="blue" className="h-7" />
        </Link>
        <div className="flex flex-col h-full gap-y-8 pt-37.5">
          <div className="space-y-3">
            <h2 className="text-display-sm">
              {step === 0 && "Forgot your password?"}
              {step === 1 && "Request sent"}
              {step === 2 && "Reset Password"}
            </h2>
            <p className="text-headline-xsm text-neutral-600">
              {step === 0 && "You’ll receive an email shortly with a link to reset your password."}
              {step === 1 && "To reset your password, please enter the 6-digit verification code sent to your email address."}
              {step === 2 && "Enter a new password below to change your password."}
            </p>
          </div>

          {step === 0 && (
            <form className="space-y-8">
              <Input label="Email" placeholder="ex: example@domain.com" icon={<IconEnvelope />} />
              <Button size="sm" className="w-full" onClick={nextStep}>
                Sign in
              </Button>
            </form>
          )}
          {step === 1 && (
            <div div className="space-y-4">
              <div className="space-y-0.5">
                <span className="text-headline-xsm block">Please enter the verification code sent to</span>
                <span className="text-body-sm text-neutral-600 block">LucasBennett2002@gmail.com</span>
              </div>
              <div className=" flex items-center justify-center gap-2.5">
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
                <input className="text-label-md size-12 text-center border-[0.84px] rounded-lg border-neutral-100 focus:outline-1 outline-primary-500" maxLength={1} />
              </div>
              <div>
                <div className="px-4 flex justify-between text-body-sm">
                  <span className="text-neutral-700">Didn’t receive the code?</span>
                  <span className="text-neutral-500">00:28</span>
                </div>
                <Button size="sm" style="neutral-text" onClick={nextStep}>
                  Resend
                </Button>
              </div>
              <Button size="sm" className="w-full" onClick={nextStep}>
                Confirm
              </Button>
            </div>
          )}
          {step === 2 && (
            <form className="space-y-8">
              <Input label="New Password" placeholder="ex: example@domain.com" icon={<IconEnvelope />} />
              <Input label="Re-enter New Password" placeholder="ex: example@domain.com" icon={<IconEnvelope />} />
              <Button size="sm" className="w-full" onClick={nextStep}>
                Done
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="hidden md:block bg-primary-200 h-full rounded-3xl w-190"></div>
    </section>
  );
}

export default Page;
