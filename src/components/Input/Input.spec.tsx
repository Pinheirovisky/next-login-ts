import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

const makeSut = () => {
  const renderComp = () =>
    render(<Input label="NOME" name="Vinicius" id="name" value="" />);

  const renderErrorComp = () =>
    render(
      <Input
        label="NOME"
        name="Vinicius"
        id="name"
        value=""
        error={true}
        msg="campo inválido"
      />,
    );

  return { renderComp, renderErrorComp };
};

describe('Input component', () => {
  test('Should start with iniital state', () => {
    const { renderComp } = makeSut();

    renderComp();

    expect(screen.getByTestId('input').childElementCount).toBe(2);
  });

  test('Should shows errors when inst correct', () => {
    const { renderErrorComp } = makeSut();

    renderErrorComp();

    expect(screen.getByTestId('input').childElementCount).toBe(4);
  });
});
