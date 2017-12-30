import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const R = require('ramda');

class EngineerPicker extends Component {
  
  state = {
    selectedOption: {},
    engineers: []
  }

  componentWillMount() {
    this.props.getEngineers();
  }

  handleChange = (selectedOption) => {
    if(selectedOption == null) {
      this.setState({ selectedOption: {} });
    } else {
      this.setState({ selectedOption });
    }
  }
  render() {
    return (
      <Select
        name="form-field-name"
        value={ this.state.selectedOption.id }
        onChange={this.handleChange}
        options={this.props.engineers}
        valueKey="id"
        labelKey="name"
      />
    );
  }

}

export default EngineerPicker;