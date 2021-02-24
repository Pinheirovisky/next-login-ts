/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { fork, all } from 'redux-saga/effects';

import { sagas as repositoriesSagas } from './repositories/sagas';

const allSagas = [...repositoriesSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
