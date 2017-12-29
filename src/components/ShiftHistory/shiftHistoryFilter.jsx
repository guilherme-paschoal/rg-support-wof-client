import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

class ShiftHistoryFilter extends Component {

  constructor(props) {
    super(props);
    
    this.handleFilterConfirm = this.handleFilterConfirm.bind(this);

    this.state = {};
  }

  handleFilterConfirm() {
    if(this.state.date) {
      this.props.doFilter(this.state.date.format('MM/DD/YYYY'));
    }
  }

  render() {
    return (
      <span>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          isOutsideRange={() => false} //allows for past dates to be chosen
        />
        <a onClick= { this.handleFilterConfirm } > Go </a>
      </span>
    );
  }
}

export default ShiftHistoryFilter;