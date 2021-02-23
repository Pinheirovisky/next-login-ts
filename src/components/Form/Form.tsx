import React from 'react';

// Components
import Input from '../Input/Input';

// Styles
import Wrapper from './Form.styles';

const Form: React.FC = () => {
  return (
    <Wrapper className="form" action="post">
      <Input
        type="email"
        name="email"
        id="email"
        label="E-MAIL"
        placeholder="user.name@mail.com"
      />
      <Input
        type="password"
        name="password"
        id="password"
        label="SENHA"
        placeholder="******"
      />
    </Wrapper>
  );
};

export default Form;
