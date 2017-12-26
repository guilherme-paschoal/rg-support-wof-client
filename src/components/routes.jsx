import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import ConnectedWofDashboard from '../containers/connectedWofDashboard';

class Routes extends Component {

  render() {
    return(
      <Switch>
        <Route path='/' component={ConnectedWofDashboard} exact />
        {/* <Route path='/engineer/:id' component={ConnectedWofDashboard} exact /> */}
      </Switch>
    );
  }

}

export default Routes;