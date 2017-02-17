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

export class SuperheroesList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadSuperheroes();
  }

  render() {
    const superheroes = this.props.SuperheroesList;
    if (typeof superheroes == 'Array') {
      console.log(superheroes);
      const superheroesDiv = superheroes.map((e) => <div>{e.id}</div>);
      return (
        <div>
          {superheroesDiv}
        </div>
      );
    }
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
