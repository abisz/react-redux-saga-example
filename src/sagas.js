import { takeEvery, call, put, select } from 'redux-saga/effects';
import { LOAD_DATA, LOAD_DRIVERS } from './constants';
import { loadData, storeData, storeDrivers } from './actions';
import { fetchData } from './api';
import { getDataLength } from './selectors';

function* loadDataSaga({ offset }) {
  const limit = 50;

  const url = `http://ergast.com/api/f1/constructors.json?limit=${limit}&offset=${offset}`;

  const response = yield call(fetchData, url);

  yield put(storeData(response));

  const currentLength = yield select(getDataLength);
  const totalLength = parseInt(response.MRData.total, 10);

  if (currentLength < totalLength) {
    yield put(loadData(currentLength));
  }
}

function* loadDriverSaga({ id }) {
  const url = `http://ergast.com/api/f1/constructors/${id}/drivers.json`;

  const response = yield call(fetchData, url);

  const drivers = response.MRData.DriverTable.Drivers;

  yield put(storeDrivers(drivers));
}

function* watchLoadData() {
  yield takeEvery(LOAD_DATA, loadDataSaga);
}

function* watchLoadDrivers() {
  yield takeEvery(LOAD_DRIVERS, loadDriverSaga);
}

export default function* rootSaga() {
  yield [
    watchLoadData(),
    watchLoadDrivers(),
  ];
}