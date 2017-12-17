import React, { Component } from 'react';

class WofDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.spinWheelOfFate(this);
  }

  render() {
    return (
      <div id="dashboard-content">
        {this.props.engineers}
      </div>
    );
  }
}

export default WofDashboard;
