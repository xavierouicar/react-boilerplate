import { createSelector } from 'reselect';

/**
 * Direct selector to the superheroesList state domain
 */
const selectSuperheroesListDomain = () => (state) => state.get('superheroesList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SuperheroesList
 */

const makeSelectSuperheroesList = () => createSelector(
  selectSuperheroesListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSuperheroesList;
export {
  selectSuperheroesListDomain,
};
