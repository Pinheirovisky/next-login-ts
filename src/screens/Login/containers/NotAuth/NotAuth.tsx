import React from 'react';

// Containers
import { Form } from '../../../../containers';

// Components
import { Button, Text } from '../../../../components';
import { FormikErrors, FormikTouched } from 'formik';
import { FormLoginValues } from '../../../../protocols/auth';

// Styles
import Wrapper from './NotAuth.styles';

interface NotAuthProps {
  values: FormLoginValues;
  errors: FormikErrors<FormLoginValues>;
  touched: FormikTouched<FormLoginValues>;
  setFieldValue: (label: string, value: string) => void;
  handleSubmit: () => void;
}

const NotAuth: React.FC<NotAuthProps> = ({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
}: NotAuthProps) => {
  return (
    <Wrapper>
      <div className="main__content__data">
        <Text as="h1">Olá, seja bem-vindo!</Text>
        <Text as="h4">Para acessar a plataforma, faça seu login.</Text>
        <Form
          values={values}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
        <Button callbackFunc={handleSubmit}>ENTRAR</Button>
      </div>
      <div className="main__content__links">
        <Text as="h3">Esqueceu seu login ou senha?</Text>
        <Text as="h3">Clique aqui</Text>
      </div>
    </Wrapper>
  );
};

export default NotAuth;
