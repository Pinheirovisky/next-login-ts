import React from 'react';

// Components
import Error from '../Icons/Error/Error';

// Styles
import Wrapper from './Input.styles';

interface Props {
  type?: string;
  name: string;
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  msg?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type = 'text',
  name,
  id,
  value = '',
  label,
  placeholder = '',
  error = false,
  msg,
  ...props
}: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  return (
    <Wrapper error={error}>
      <label htmlFor={id} data-testid="input">
        {label && <span>{label}</span>}
        <input
          readOnly
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onFocus={enableInput}
          {...props}
        />
        {msg && <p>{msg}</p>}
        {error && <Error />}
      </label>
    </Wrapper>
  );
};

export default Input;
