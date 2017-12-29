import React, { Component } from 'react';

class ShiftItem extends Component {

  render() {
    return(
      <tr>
        <td>{ this.props.date } </td>
        <td>{ this.props.order } </td>
        <td>{ this.props.engineer } </td>
      </tr>
    )
  }

}

export default ShiftItem;