import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../styles/react_dates_overrides.css';

import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import {Row, Col} from 'react-bootstrap';
import ConnectedEngineerPicker from '../../containers/connectedEngineerPicker';

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
      <Row>
        <Col md={2}>
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            isOutsideRange={() => false} //allows for past dates to be chosen
          />
        </Col>
        <Col md={4}>
          <ConnectedEngineerPicker />
        </Col>
        <Col md={6}>
          <a onClick= { this.handleFilterConfirm } > Go </a>
        </Col>
      </Row>
    );
  }
}

export default ShiftHistoryFilter;