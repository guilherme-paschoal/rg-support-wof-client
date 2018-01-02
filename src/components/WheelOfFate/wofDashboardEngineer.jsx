import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Numeral from 'numeral'

class WofDashboardEngineer extends Component {

  getShiftOrderText() {
    return Numeral(this.props.shift).format('0o') + " shift";
  }

  render() {
    return (
      <div>
        <Panel header={ this.getShiftOrderText() }>
          {this.props.name}
        </Panel>
      </div>
    );
  }
}

export default WofDashboardEngineer;
