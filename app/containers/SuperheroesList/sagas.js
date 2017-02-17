import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import * as superheroesApi from 'utils/superheroes.api';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SUPERHEROES } from 'containers/SuperheroesList/constants';

export function* getSuperheroesList() {
  try {
    const superheroes = yield call(superheroesApi.getSuperheroesList);
    console.log(superheroes);
    // success
    // yield put(reposLoaded(repos, username));
  } catch (err) {
    // error
    console.log(err);
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* superheroesData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_SUPERHEROES, getSuperheroesList);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  superheroesData,
];
