import React, { Component } from 'react';
// import ConnectedWofDashboard from './connectedWofDashboard'
import ConnectedRoutes from '../containers/connectedRoutes';
import { Col, Row} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <Row>
        <Col md={12}>
            <ConnectedRoutes />
        </Col>
      </Row>
    );
  }

}

export default App;

