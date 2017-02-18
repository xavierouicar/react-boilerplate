/*
 *
 * SuperheroesList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SUPERHEROES
} from './constants';

const initialState = fromJS({superheroes: []});

function superheroesListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUPERHEROES:
      const {superheroes} = action;
      return fromJS({superheroes});
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default superheroesListReducer;
