import React from 'react';
import { cn } from '../../utils/cn';

const Label = React.forwardRef(
  ({ className, required, htmlFor, ...props }, ref) => {
    return (
      <label
        htmlFor={htmlFor}
        className={cn(
          'block text-sm font-medium leading-none',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          'mb-1',
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  }
);
Label.displayName = 'Label';

export { Label };