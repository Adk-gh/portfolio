import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const variants = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    text: 'button-text',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variants[variant] || variants.primary} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;