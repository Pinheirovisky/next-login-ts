/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Validations
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Actions
import * as authActions from '../../store/ducks/auth/actions';

// Containers
import { Auth, Form } from '../../containers'

// Components
import { Button, Text } from '../../components'

// Styles
import { BgImage, Wrapper } from './Login.styles';
import { AuthUser } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const authData: AuthUser = useSelector(
    (state: ApplicationState) => state.auth.data,
  );

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
      formik.resetForm()
    },
  });

  const { setFieldValue, handleSubmit } = formik;

  return (
    <Wrapper showBg={!!authData}>
      {authData && <Auth />}
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
            <Button callbackFunc={handleSubmit}>ENTRAR</Button>
          </div>
          <div className="main__content__links">
            <Text as="h3">Esqueceu seu login ou senha?</Text>
            <Text as="h3">Clique aqui</Text>
          </div>
        </div>
      </div>
      <BgImage />
    </Wrapper>
  );
};

export default Login;
