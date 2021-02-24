/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from './types';

import { loadSucces, loadFailure } from './actions';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export function* load() {
  console.log('exec');
  try {
    const response = yield call(api.get, 'users/pinheirovisky/repos');

    yield put(loadSucces(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* watchRepositories() {
  yield takeLatest(RepositoriesTypes.LOAD_REQUEST, load);
}

export const sagas = [watchRepositories];
