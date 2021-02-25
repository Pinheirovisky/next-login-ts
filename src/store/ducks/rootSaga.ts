/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { fork, all } from 'redux-saga/effects';

import { sagas as authSagas } from './auth/sagas';

const allSagas = [...authSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
