
import { fromJS } from 'immutable';
import superheroesListReducer from '../reducer';

describe('superheroesListReducer', () => {
  it('returns the initial state', () => {
    expect(superheroesListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
