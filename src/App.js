import React, { Component } from 'react';
import './App.css';
import ConnectedWofDashboard from "./containers/connectedWofDashboad";

class App extends Component {
  render() {
    return (<ConnectedWofDashboard />);
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload. asd
    //     </p>
    //   </div>
    // );
  }
}

export default App;
