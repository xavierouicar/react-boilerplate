/*
 *
 * Detail
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { locationShape } from 'react-router/lib/PropTypes';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import makeSelectDetail from './selectors';
import { loadSuperhero } from './actions';

export class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadSuperhero(this.props.params.id);
  }

  renderItems(label, items) {
    return (
      <div>
        <h3>
          {label}
        </h3>
        <ul>
          {items.map(item =><li>{item.name}</li>)}
        </ul>
      </div>);
  }

  render() {
    const {loading, superhero} = this.props.Detail;
    return loading ? <CircularProgress size={150} thickness={10} /> : (
      <Grid>
        <Row>
          <Col xs={12} sm={3}>
            <Paper zDepth={3}>
              <img style={{width: '100%'}} src={superhero.thumbnail.path + '.' + superhero.thumbnail.extension} />
            </Paper>
          </Col>
          <Col xsOffset={1} xs={10} sm={8} md={7}>
            <h1>
              {superhero.name}
            </h1>
            <h5>
              {superhero.description}
            </h5>
            {superhero.series.available > 0 && this.renderItems('Series', superhero.series.items)}
            {superhero.events.available > 0 && this.renderItems('Events', superhero.events.items)}
            {superhero.stories.available > 0 && this.renderItems('Stories', superhero.stories.items)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

Detail.propTypes = {
  loadSuperhero: PropTypes.func.isRequired,
  Detail: PropTypes.object.isRequired,
  location: locationShape.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Detail: makeSelectDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadSuperhero: id => dispatch(loadSuperhero(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
