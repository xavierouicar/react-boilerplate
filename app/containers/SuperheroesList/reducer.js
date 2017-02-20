/*
 *
 * SuperheroesList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_SUPERHEROES,
  SET_SUPERHEROES
} from './constants';

const initialState = fromJS({superheroes: [], loading: false});

function superheroesListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUPERHEROES:
      const {superheroes} = action;
      return fromJS({superheroes, loading: false});
    case LOAD_SUPERHEROES:
      return fromJS({...state, loading: true});
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default superheroesListReducer;
