import React from 'react';
import Input from '../Input/Input';

const Form: React.FC = () => {
  return (
    <form className="form" action="post">
      <Input
        type="email"
        name="email"
        id="email"
        label="E-MAIL"
        placeholder="user.name@mail.com"
      />
      <Input
        type="email"
        name="email"
        id="email"
        label="SENHA"
        placeholder="******"
      />
    </form>
  );
};

export default Form;
