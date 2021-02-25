import React from 'react';

// Styles
import Wrapper from './Button.styles';

interface ButtonProps {
  callbackFunc: () => void;
}

const Button: React.FC<ButtonProps> = ({ callbackFunc }: ButtonProps) => {
  return (
    <Wrapper type="submit" onClick={() => callbackFunc()}>
      <span>ENTRAR</span>
    </Wrapper>
  );
};

export default Button;
