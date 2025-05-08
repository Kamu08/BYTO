
import React from 'react';
import { cn } from '../../utils/cn';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      {/* Progress line */}
      <div className="relative h-2 bg-gray-200 rounded-full mb-2">
        <div
          className={cn(
            'absolute top-0 left-0 h-full bg-amber-500 rounded-full transition-all duration-500',
            'ease-in-out'
          )}
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`
          }}
        />
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            {/* Step dot */}
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center',
                'transition-colors duration-300',
                currentStep > step.id
                  ? 'bg-amber-500 text-white'
                  : currentStep === step.id
                  ? 'border-2 border-amber-500 bg-white text-amber-500'
                  : 'border-2 border-gray-300 bg-white text-gray-400'
              )}
            >
              {currentStep > step.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            
            {/* Step label */}
            <span
              className={cn(
                'mt-2 text-xs font-medium',
                currentStep >= step.id ? 'text-amber-600' : 'text-gray-500'
              )}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;