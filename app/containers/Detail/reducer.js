/*
 *
 * Detail reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_SUPERHERO,
  SET_SUPERHERO
} from './constants';

const initialState = fromJS({loading: false, superhero: null});

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUPERHERO:
      const {superhero} = action;
      return fromJS({superhero, loading: false});
    case LOAD_SUPERHERO:
      return fromJS({...state, loading: true});
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default detailReducer;
