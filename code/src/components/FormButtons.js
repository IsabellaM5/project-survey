import React from 'react';

import Button from './Button';

let buttonTexts = ["Let's go!", "Next", "Next", "Submit"]; // add "Restart" if I want this function

const FormButtons = ({ step, setStep }) => {
  const nextStep = step + 1;
  const previousStep = step - 1;
  
  return (
    <>
      {step >= 0 && step < 3 && (
        <Button 
          stepBtn={nextStep}
          setStep={setStep}
          btnTxt={buttonTexts[step]}
        />
      )}

      {step > 1 && step < 4 && (
        <Button 
          stepBtn={previousStep}
          setStep={setStep}
          btnTxt="Previous"
        />
      )}
    </>
  );
};

export default FormButtons;