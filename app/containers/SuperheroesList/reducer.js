/*
 *
 * SuperheroesList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION
} from './constants';

const initialState = fromJS({});

function superheroesListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default superheroesListReducer;
