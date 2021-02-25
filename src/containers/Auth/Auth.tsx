import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import * as authActions from '../../store/ducks/auth/actions';

// Components
import { Text } from '../../components';

import Wrapper from './Auth.styles';
import { AuthUser } from '../../store/ducks/auth/types';
import { ApplicationState } from '../../store';

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const authData: AuthUser = useSelector(
    (state: ApplicationState) => state.auth.data,
  );

  return (
    authData && (
      <Wrapper>
        <Text as="h1">{`Parabéns, ${authData.name} , você está logado!`}</Text>
        <button onClick={() => dispatch(authActions.logoutRequest())}>
          <span>Sair</span>
        </button>
      </Wrapper>
    )
  );
};

export default Auth;
