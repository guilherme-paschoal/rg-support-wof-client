
import React, { Component } from 'react';
import WofDashboardEngineer from './wofDashboardEngineer'
import { Button, Col, Jumbotron, Grid, Row} from 'react-bootstrap';

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
    return( <WofDashboardEngineer name={element.name} shift={element.shifts[0].shiftOrder}/> )
  }
  render() {
    return (
      <Grid>
        <Col md={1}>
        </Col>
        <Col md={10}>
          <Jumbotron>
            <h1>The Support Wheel of Fate</h1>
            <p> Welcome to the support wheel of fate! Click the button below to get the Engineers that are going to work today </p>
            <p>
              <Button onClick={ this.spin } bsStyle="primary" > Spin the Wheel </Button>
            </p>
          </Jumbotron>
          { !R.isEmpty(this.props.people) && R.map(this.renderEngineer, this.props.people) }

        </Col>
        <Col md={1}>
        </Col>
      </Grid>
    );
  }
}

export default WofDashboard;
