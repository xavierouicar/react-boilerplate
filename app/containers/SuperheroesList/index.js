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
import CircularProgress from 'material-ui/CircularProgress';
import {Grid, Row, Col} from 'react-flexbox-grid';

export class SuperheroesList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadSuperheroes();
  }

  renderSuperheroes(superheroes) {
    return superheroes.map(
      superhero => <Col key={superhero.id} xs={12} sm={6} md={4} lg={3}>
        <SuperheroCard superhero={superhero} />
      </Col>
    );
  }

  render() {
    const {superheroes, loading} = this.props.SuperheroesList;
    return loading ? <CircularProgress size={150} thickness={10} /> :
      (<Grid>
        <Row middle="xs">
          {this.renderSuperheroes(superheroes)}
        </Row>
      </Grid>);
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
