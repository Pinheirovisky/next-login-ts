/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Validations
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Actions
import * as authActions from '../../store/ducks/auth/actions';

// Components
import { Button, Text } from '../../components'

// Styles
import { BgImage, Wrapper } from './Login.styles';
import NotAuth from './containers/NotAuth/NotAuth';
import { ApplicationState } from '../../store';
import { AuthUser } from '../../store/ducks/auth/types';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const authData: AuthUser = useSelector((state: ApplicationState) => state.auth.data);

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
          {authData ? (
            <div className="main__content__data">
              <Text as="h1">{`Nome: ${authData.name}`}</Text>
              <Text as="h1">{`País: ${authData.country}`}</Text>
              <Text as="h1">{`Token: ${authData.token}`}</Text>
              <Button callbackFunc={() => dispatch(authActions.logoutRequest())}>Sair</Button>
            </div>
          ) : (
              <NotAuth
                values={formik.values}
                touched={formik.touched}
                errors={formik.errors}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
              />
            )}
        </div>
      </div>
      <BgImage />
    </Wrapper>
  );
};

export default Login;
