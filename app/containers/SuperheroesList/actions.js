/*
 *
 * SuperheroesList actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SUPERHEROES,
  SET_SUPERHEROES
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadSuperheroes() {
  return {
    type: LOAD_SUPERHEROES
  };
}

export function setSuperheroes(superheroes) {
  return {
    type: SET_SUPERHEROES,
    superheroes
  };
}
