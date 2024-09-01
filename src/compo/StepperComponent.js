import React from 'react';
import './StepperComponent.css';

const StepperComponent = ({ currentStep }) => {
  return (
    
    <div className="stepper-wrapper">
      <h2 className="register-heading">Register</h2>
      <div className="stepper-container">
        <div className={`step step1 ${currentStep === 1 ? 'active' : ''}`}>
          <div className="circle">1</div>
          <p>User Details</p>
        </div>
        <div className={`step step2${currentStep === 2 ? 'active' : ''}`}>
          <div className="circle">2</div>
          <p>OTP Authentication</p>
        </div>
        <div className={`step step3 ${currentStep === 3 ? 'active' : ''}`}>
          <div className="circle">3</div>
          <p>Password Creation</p>
        </div>
      </div>
    </div>
  );
};

export default StepperComponent;
