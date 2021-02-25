import { HYDRATE } from 'next-redux-wrapper';
import { AuthState, AuthTypes } from './types';
import { sagas } from './sagas';
import * as actions from './actions';

const INITIAL_STATE: AuthState = {
  data: null,
  error: false,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.auth,
      };
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCES:
      return { ...state, loading: false, error: false, data: action.payload };
    case AuthTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };

    case AuthTypes.LOGOUT_REQUEST:
      return { state: INITIAL_STATE };

    default:
      return state;
  }
}

export { actions, sagas };
