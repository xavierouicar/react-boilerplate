/*
 *
 * SuperheroesList actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SUPERHEROES
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
