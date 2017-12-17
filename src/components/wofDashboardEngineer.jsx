import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class WofDashboardEngineer extends Component {
  render() {
    return (
      <div>
        <Panel header="First/Second/Third Shift">
          {this.props.name}
        </Panel>
      </div>
    );
  }
}

export default WofDashboardEngineer;
