
import React, { Component } from 'react';
import WofDashboardEngineer from './wofDashboardEngineer'

const R = require('ramda');

class WofDashboard extends Component {

  componentWillMount() {
    this.props.spinTheWheel();    
  }
  renderEngineer(element) {
    return <WofDashboardEngineer key={element.engineer.id} name={element.engineer.name} shift={element.shiftOrder}/> 
  }

  render() {
    return (
    <div>
      { !R.isEmpty(this.props.shifts) && R.map(this.renderEngineer, this.props.shifts) }
    </div>
    )
  }

}

export default WofDashboard;
