/*
 *
 * Detail
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDetail from './selectors';
import { loadSuperhero } from './actions';
import { locationShape } from 'react-router/lib/PropTypes';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

export class Detail extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadSuperhero(this.props.params.id);
  }

  renderItems(items) {
    return (<ul>
        {items.map(item =><li>{item.name}</li>)}
      </ul>);
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
          <Col xsOffset={1} xs={10} sm={9} md={7}>
            <h1>
              {superhero.name}
            </h1>
            <h5>
              {superhero.description}
            </h5>
            <h3>
              Series
            </h3>
            {this.renderItems(superhero.series.items)}
            <h3>
              Events
            </h3>
            {this.renderItems(superhero.events.items)}
            <h3>
              Stories
            </h3>
            {this.renderItems(superhero.stories.items)}
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
