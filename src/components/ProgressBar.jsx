import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        Step {step} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;