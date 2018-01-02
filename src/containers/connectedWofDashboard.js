import { connect } from 'react-redux';
import { spinWheelOfFate } from '../actions/wheelOfFateActions';
import WofDashboard from '../components/WheelOfFate/wofDashboard';

const mapStateToProps = state => {
  return { 
    shifts: state.wheelOfFate.shifts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    spinTheWheel: () => { dispatch(spinWheelOfFate(dispatch))},
  }
}

const ConnectedWofDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(WofDashboard);

export default ConnectedWofDashboard;
