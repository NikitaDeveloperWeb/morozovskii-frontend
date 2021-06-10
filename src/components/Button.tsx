import React from 'react';

interface ButtonProps {
  value: string | undefined | JSX.Element;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: 'Button-primary' | 'Button-outline' | 'Button-warning' | 'Button-icon';
  onclick?: any;
}

const Button = ({ value, type, form, className, onclick }: ButtonProps) => {
  return (
    <button type={type} form={form} className={className} onClick={onclick}>
      {value}
    </button>
  );
};

export default Button;
