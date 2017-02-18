/*
 *
 * SuperheroesList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSuperheroesList from './selectors';
import {loadSuperheroes} from './actions';
import SuperheroCard from '../../components/SuperheroCard/index';
import {GridList} from 'material-ui/GridList';

export class SuperheroesList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadSuperheroes();
  }

  render() {
    const {superheroes} = this.props.SuperheroesList;
    const superheroesElements = superheroes.map(
      superhero => <SuperheroCard superhero={superhero} key={superhero.id}/>
    );
    return (
      <GridList
        cellHeight={250}
      >
        {superheroesElements}
      </GridList>
    );
  }
}

SuperheroesList.propTypes = {
  loadSuperheroes: PropTypes.func.isRequired,

};

const mapStateToProps = createStructuredSelector({
  SuperheroesList: makeSelectSuperheroesList(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadSuperheroes: () => dispatch(loadSuperheroes())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList);
