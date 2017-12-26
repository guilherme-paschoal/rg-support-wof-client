import React, { Component } from 'react';
// import ConnectedWofDashboard from './connectedWofDashboard'
import { Col, Jumbotron, Grid, Row} from 'react-bootstrap';
import ConnectedWofButtons from '../containers/connectedWofButtons';
import ConnectedRoutes from '../containers/connectedRoutes';

class App extends Component {

  render() {
    return (
      <Grid> 
        <Row> 
          <Col md={1}>
          </Col>
          <Col md={10}>
            <Jumbotron>
              <h1>The Support Wheel of Fate</h1>
              <p> Welcome to the support wheel of fate! Click the button below to get the Engineers that are going to work today </p>

              <ConnectedWofButtons />

            </Jumbotron>
          </Col>
          <Col md={1}>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
             <ConnectedRoutes />
          </Col>
        </Row>
      </Grid>

    );
  }

}

export default App;

