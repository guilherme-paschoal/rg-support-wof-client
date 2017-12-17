import { connect } from 'react-redux';
import { getWheelOfFate } from '../actions';
import WofDashboard from '../components/wofDashboard';

const mapStateToProps = state => {
  return { 
    people: state.wheelOfFate.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    spinWheel: () => { dispatch(getWheelOfFate(dispatch))}
  }
}

const ConnectedWofDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(WofDashboard);

export default ConnectedWofDashboard;
