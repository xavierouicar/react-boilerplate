/**
*
* SuperheroCard
*
*/

import React, { PropTypes } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionLabel from 'material-ui/svg-icons/action/label';
import { Link } from 'react-router';

// import styled from 'styled-components';

class SuperheroCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderUrls(urls) {
    return <div>
      {urls.map(url =>
        <a href={url.url} key={url.type}>
          <FlatButton
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
        <Card id={superhero.id} initiallyExpanded={false}>
          <Link to={`/detail/${superhero.id}`}>
            <CardMedia style={{'maxHeight': '400px', overflow: 'hidden'}}>
              <img src={superhero.thumbnail.path + '.' + superhero.thumbnail.extension} />
            </CardMedia>
            <CardTitle title={superhero.name} actAsExpander showExpandableButton />
          </Link>
          <CardActions>
            {this.renderUrls(superhero.urls)}
          </CardActions>
          <CardText expandable>
            {superhero.description}
          </CardText>
        </Card>
    );
  }
}

SuperheroCard.propTypes = {
  superhero: PropTypes.object.isRequired
};

export default SuperheroCard;
