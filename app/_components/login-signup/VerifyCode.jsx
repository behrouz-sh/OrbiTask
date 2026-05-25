import FormHeader from './FormHeader';

export default function VerifyCode({ children }) {
  return (
    <div div className='space-y-8 md:mt-[16dvh]'>
      <FormHeader size='sm'>
        <FormHeader.Title>
          Email Verification Code
        </FormHeader.Title>
        <FormHeader.Description>
          We&#39;ve sent a 6-digit confirmation code to your
          email. Please enter the code in the box below to
          verify your account creation request.
        </FormHeader.Description>
      </FormHeader>
      {children}
    </div>
  );
}
