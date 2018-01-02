import React, { Component } from 'react';
import ShiftItem from './shiftItem';
import { Table } from 'react-bootstrap';
const R = require("ramda");

class ShiftHistoryList extends Component {

  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }
  
  renderShifts(shift) {
    return (<ShiftItem date={shift.date} order={shift.shiftOrder} engineer={shift.engineer.name} key={shift.id}/>);
  }

  renderTable(shifts) {
    return(
      <Table responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order</th>
            <th>Engineer</th>
          </tr>
        </thead>
        <tbody>
          { R.map(this.renderShifts, shifts) }
        </tbody>
      </Table>
    );
  } 
  render() {
    return(
      <div>
       { this.renderTable(this.props.shifts) }
      </div>
    )
  }

}

export default ShiftHistoryList;