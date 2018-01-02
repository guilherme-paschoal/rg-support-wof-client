import React, { Component } from 'react';

const moment = require('moment');

class ShiftItem extends Component {

  render() {
    const date = moment(this.props.date).format('MM/DD/YYYY');

    return(
      <tr>
        <td>{ date } </td>
        <td>{ this.props.order } </td>
        <td>{ this.props.engineer } </td>
      </tr>
    )
  }

}

export default ShiftItem;