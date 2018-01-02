import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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

    if(this.props.onChange)
      this.props.onChange(selectedOption);

  }
  render() {
    return (
      <Select name="form-field-name" value={ this.state.selectedOption.id } onChange={this.handleChange}
        options={this.props.engineers} valueKey="id" labelKey="name" />
    );
  }

}

export default EngineerPicker;