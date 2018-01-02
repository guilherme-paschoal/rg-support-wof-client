import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../styles/react_dates_overrides.css';
import '../../styles/custom_bootstrap.css';

import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import {Row, Col, Well, Button} from 'react-bootstrap';
import ConnectedEngineerPicker from '../../containers/connectedEngineerPicker';

const moment = require('moment');

class ShiftHistoryFilter extends Component {

  constructor(props) {
    super(props);
    
    this.handleFilterConfirm = this.handleFilterConfirm.bind(this);

    this.state = {
      date: moment().subtract(7,'days')
    };
  }

  // Initial load with initial state
  componentDidMount() {
    this.handleFilterConfirm();
  }

  handleFilterConfirm() {
    this.props.doFilter(this.state);
  }

  render() {
    return (
      <Well>
        <Row>
          <Col md={1} className='pad-right-sm pad-top-text'>
            Filter Data:
          </Col>
          <Col md={2} className='pad-sm'>
            <SingleDatePicker
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              isOutsideRange={() => false} //allows for past dates to be chosen
            />
          </Col>
          <Col md={4}  className='pad-sm'>
            <ConnectedEngineerPicker onChange={ engineer => this.setState({ engineer: engineer }) } />
          </Col>
          <Col md={5} className='pad-left-sm'>
            <Button onClick= { this.handleFilterConfirm } bsStyle="primary" > Go </Button>
          </Col>
        </Row>
      </Well>
    );
  }
}

export default ShiftHistoryFilter;