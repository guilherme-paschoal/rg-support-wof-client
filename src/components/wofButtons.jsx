import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class WofButtons extends Component {

  render() {
    return(
      <div>
        <Button onClick={ this.props.spinTheWheel } bsStyle="primary" > Spin the Wheel </Button>
      </div>
    )
  }

}

export default WofButtons;
