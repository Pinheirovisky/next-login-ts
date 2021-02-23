import React from 'react';

// Styles
import Wrapper from './Input.styles';

interface Props {
  type?: string;
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  type = 'text',
  name,
  id,
  label,
  placeholder = '',
}: Props) => {
  return (
    <Wrapper>
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        <input type={type} name={name} id={id} placeholder={placeholder} />
      </label>
    </Wrapper>
  );
};

export default Input;
