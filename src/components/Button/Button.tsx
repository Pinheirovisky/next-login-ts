import React from 'react';

// Styles
import Wrapper from './Button.styles';

interface ButtonProps {
  callbackFunc: () => void;
  children: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  callbackFunc,
  children,
  className = '',
}: ButtonProps) => {
  return (
    <Wrapper type="submit" className={className} onClick={() => callbackFunc()}>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
