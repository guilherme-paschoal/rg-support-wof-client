
import React, { Component } from 'react';
import WofDashboardEngineer from './wofDashboardEngineer'

const R = require('ramda');

class WofDashboard extends Component {

  constructor(props) {
    super(props);

    this.spin = this.spin.bind(this);
  }

  spin() {
    this.props.spinWheel();    
  }

  renderEngineer(element) {
    return <WofDashboardEngineer key={element.id} name={element.name} shift={element.shifts[0].shiftOrder}/> 
  }

  render() {
    return (
    <div>
      { !R.isEmpty(this.props.people) && R.map(this.renderEngineer, this.props.people) }
    </div>
    )
  }

}

export default WofDashboard;
