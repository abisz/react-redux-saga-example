import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA } from './constants';
import { storeData } from './actions';
import { fetchData } from './api';

function* loadData() {
  const limit = 50;

  const url = `http://ergast.com/api/f1/constructors.json?limit=${limit}`;

  const response = yield call(fetchData, url);

  yield put(storeData(response));
}

function* watchLoadData() {
  yield takeEvery(LOAD_DATA, loadData);
}

export default function* rootSaga() {
  yield [
    watchLoadData(),
  ];
}