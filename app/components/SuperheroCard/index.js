/**
*
* SuperheroCard
*
*/

import React, { PropTypes } from 'react';
import {GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import ActionLabel from 'material-ui/svg-icons/action/label';

// import styled from 'styled-components';

class SuperheroCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderUrls(urls) {
    return <div>
      {urls.map(url =>
        <a href={url.url} key={url.type} style={{'margin-right': '10px'}}>
          <RaisedButton
            icon={<ActionLabel />}
            label={url.type}
          />
        </a>
      )}
    </div>
  }

  render() {
    const {superhero} = this.props;
    return (
      <GridTile
        cols={4}
        id={superhero.id}
        key={superhero.id}
        title={superhero.name}
        subtitle={<span>{this.renderUrls(superhero.urls)}</span>}
      >
        <img src={superhero.thumbnail.path + '.' + superhero.thumbnail.extension} />
      </GridTile>
    );
  }
}

SuperheroCard.propTypes = {
  superhero: PropTypes.object.isRequired
};

export default SuperheroCard;
