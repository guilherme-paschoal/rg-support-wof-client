import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ConnectedWofDashboard from '../containers/connectedWofDashboard';
import ConnectedShiftHistory from '../containers/connectedShiftHistory';

class Routes extends Component {

  render() {
    return(
      <Switch>
        <Route path='/wheel' component={ConnectedWofDashboard} exact />
        <Route path='/shifts' component={ConnectedShiftHistory} exact />
      </Switch>
    );
  }

}

export default Routes;