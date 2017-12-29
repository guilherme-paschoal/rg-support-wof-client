
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './components/app';

import { Col, Jumbotron, Grid, Row} from 'react-bootstrap';
import NavButtons from './components/navButtons';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Grid>
        <Row> 
          <Col md={12}>
            <Jumbotron>
              <h1>The Support Wheel of Fate</h1>
              <p> Welcome to the support wheel of fate! Click the button below to get the Engineers that are going to work today </p>
              <Route path='/' component={NavButtons} />
            </Jumbotron>
          </Col>
        </Row>
        <App />
      </Grid>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
