import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import * as superheroesApi from 'utils/superheroes.api';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SUPERHERO } from 'containers/Detail/constants';
import { setSuperhero } from 'containers/Detail/actions';

export function* getSuperhero(action) {
  try {
    const superhero = yield call(superheroesApi.getSuperhero, action.id);
    yield put(setSuperhero(superhero));

  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* superheroData() {
  const watcher = yield takeLatest(LOAD_SUPERHERO, getSuperhero);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  superheroData,
];
