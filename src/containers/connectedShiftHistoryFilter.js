import { connect } from 'react-redux';
import ShiftHistoryFilter from '../components/ShiftHistory/shiftHistoryFilter';
import { getShiftHistory } from '../actions/shiftActions'

const _doFilter = (filter, dispatch) => {
  const date = filter.date ? filter.date.format('MM/DD/YYYY') : null;
  const engineer = filter.engineer ? filter.engineer.id : null; 
  dispatch(getShiftHistory(date, engineer))
}

const mapStateToProps = (state) => {
  return {
    shifts: state.shifts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doFilter: (filter) => { _doFilter(filter, dispatch); }
  }
}

const ConnectedShiftHistoryFilter = connect(mapStateToProps, mapDispatchToProps)(ShiftHistoryFilter);

export default ConnectedShiftHistoryFilter;