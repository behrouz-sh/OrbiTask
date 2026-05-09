import { useEffect } from "react";

import Button from "ui/button";

import FormHeader from "components/layouts/FormHeader";
import NumberForm from "components/layouts/CodeVerification";

function Verification({ time, setTime, defaultTime = 30, nextStep }) {
  useEffect(() => {
    if (time >= 1) {
      const internal = setInterval(() => setTime((time) => time - 1), 1000);
      return () => clearInterval(internal);
    }
  }, [time, setTime]);

  const resendCode = () => {
    alert("welcome to Orbitask\n Orbitask Code: 123456");
    setTime(defaultTime);
  };
  return (
    <div div className="space-y-8">
      <FormHeader size="sm">
        <FormHeader.Title>Email Verification Code</FormHeader.Title>
        <FormHeader.Description>We&#39;ve sent a 6-digit confirmation code to your email. Please enter the code in the box below to verify your account creation request.</FormHeader.Description>
      </FormHeader>
      <div className="space-y-6">
        <div className="space-y-0.5">
          <span className="block text-headline-xsm">Please enter the Verification code sent to</span>
          <span className="block text-body-sm text-neutral-600">LucasBennett2002@gmail.com</span>
        </div>
        <NumberForm />
        <div>
          <div className="flex justify-between px-4 text-body-sm">
            <span className="text-neutral-700">Didn’t receive the code?</span>
            <span className="text-neutral-500">
              {Math.floor(time / 60)
                .toString()
                .padStart(2, "0")}
              :
              {Math.floor(time % 60)
                .toString()
                .padStart(2, "0")}
            </span>
          </div>
          {/* {time === 0 && ( */}
          <Button size="sm" style="neutral-text" onClick={nextStep}>
            Resend
          </Button>
          {/* // )} */}
        </div>
      </div>
    </div>
  );
}

export default Verification;
