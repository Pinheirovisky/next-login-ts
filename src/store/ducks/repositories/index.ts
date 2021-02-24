import { Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { RepositoriesState, RepositoriesTypes } from './types';
import { sagas } from './sagas';
import * as actions from './actions';

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: 'reduxsagas-ts' }],
  error: false,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.repositories,
      };
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCES:
      return { ...state, loading: false, error: false, data: action.payload };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export { actions, sagas };
