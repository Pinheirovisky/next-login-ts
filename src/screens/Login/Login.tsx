import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

// Validations
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Containers
import { Form } from '../../containers';

// Components
import { Button, Text } from '../../components';

// Actions
import * as authActions from '../../store/ducks/auth/actions';

// Styles
import { BgImage, Wrapper } from './Login.styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();

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
      dispatch(authActions.loginRequest(values));
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
            <Button callbackFunc={handleSubmit} />
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
