/*
 *
 * Detail actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SUPERHERO,
  SET_SUPERHERO
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadSuperhero(id) {
  return {
    type: LOAD_SUPERHERO,
    id
  };
}

export function setSuperhero(superhero) {
  return {
    type: SET_SUPERHERO,
    superhero
  };
}
