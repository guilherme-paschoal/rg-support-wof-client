import { connect } from 'react-redux';
import ShiftHistory from '../components/ShiftHistory/shiftHistory';

const mapStateToProps = (state, ownProps) => {
  return {
    shifts: state.shifts
  }
}

const ConnectedShiftHistory = connect(mapStateToProps)(ShiftHistory);

export default ConnectedShiftHistory;