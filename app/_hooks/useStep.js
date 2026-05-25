'use client';
import { useState } from 'react';

export default function useStep() {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () =>
    setCurrentStep((currentStep) => currentStep + 1);
  const previousStep = () =>
    setCurrentStep((currentStep) => currentStep - 1);
  return { currentStep, nextStep, previousStep };
}
