import { connect } from 'react-redux';
import ShiftHistory from '../components/ShiftHistory/shiftHistory';
import { parseUrl } from '../utils/urlUtils';
import { getShiftHistory as getShiftHistoryAction } from '../actions/shiftActions'

const _getShiftHistory = (date, dispatch) => {
  dispatch(getShiftHistoryAction(date));
}

const mapStateToProps = (state, ownProps) => {
  const urlSearchParams = parseUrl(ownProps.location.search);
  return {
    date: urlSearchParams.date,
    shifts: state.shifts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShiftHistory: (date) => { _getShiftHistory(date, dispatch); }
  }
}

const ConnectedShiftHistory = connect(mapStateToProps, mapDispatchToProps)(ShiftHistory);

export default ConnectedShiftHistory;