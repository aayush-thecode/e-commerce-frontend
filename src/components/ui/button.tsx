
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variantClasses = {
      default: 'bg-black text-white hover:bg-gray-800',
      outline: 'border border-gray-800 text-gray-800 hover:bg-gray-50',
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';