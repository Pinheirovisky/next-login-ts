import React from 'react';
import Link from 'next/link';

// Validations
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Containers
import { Form } from '../../containers';

// Components
import { Text } from '../../components';

// Styles
import { BgImage, Wrapper } from './Login.styles';

export interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('É obrigatório informar seu e-mail'),
      password: Yup.string().required('É obrigatório informar sua senha'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // setBlockedButton(true);
      // dispatch(userActions.loginRequest({ data: { ...values, keepMeLogged } }));
    },
  });

  const { setFieldValue, handleSubmit } = formik;

  return (
    <Wrapper>
      <div className="main">
        <div className="main__content">
          <div className="main__content__data">
            <Text as="h1">Olá, seja bem-vindo!</Text>
            <Text as="h4">Para acessar a plataforma, faça seu login.</Text>
            <Form
              values={formik.values}
              setFieldValue={setFieldValue}
              errors={formik.errors}
              touched={formik.touched}
            />
            <button type="submit" onClick={() => handleSubmit()}>
              ENTRAR
            </button>
          </div>
          <div className="main__content__links">
            <Text as="h3">Esqueceu seu login ou senha?</Text>
            <Text as="h3">
              Clique{' '}
              <Link href={`/`}>
                <a>aqui</a>
              </Link>
            </Text>
          </div>
        </div>
      </div>
      <BgImage />
    </Wrapper>
  );
};

export default Login;
