import React from 'react';

// Components
import Error from '../Icons/Error/Error';

// Styles
import Wrapper from './Input.styles';

interface Props {
  type?: string;
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  msg?: string;
}

const Input: React.FC<Props> = ({
  type = 'text',
  name,
  id,
  label,
  placeholder = '',
  error = true,
  msg = 'Campo inválido',
}: Props) => {
  return (
    <Wrapper error={error}>
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        <input type={type} name={name} id={id} placeholder={placeholder} />
        <p>{msg}</p>
        {error && <Error />}
      </label>
    </Wrapper>
  );
};

export default Input;
