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
const {Grid, Row, Col} = require('react-flexbox-grid');

export class SuperheroesList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadSuperheroes();
  }

  render() {
    const {superheroes} = this.props.SuperheroesList;
    const superheroesElements = superheroes.map(
      superhero => <Col key={superhero.id} xs={12} sm={6} md={4} lg={3}>
        <SuperheroCard superhero={superhero} />
      </Col>
    );
    return (
      <Grid>
        <Row middle="xs">
          {superheroesElements}
        </Row>
      </Grid>
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
