/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from './types';

import { loginSucces, loginFailure } from './actions';
import { authApi } from '../../../services/mirror-api';

export function* login(data) {
  try {
    const response = yield call(authApi.login, { ...data });

    yield put(loginSucces({ ...response.data, email: data.email }));
  } catch (err) {
    yield put(loginFailure());
  }
}

export function* watchAuth() {
  yield takeLatest(AuthTypes.LOGIN_REQUEST, login);
}

export const sagas = [watchAuth];
