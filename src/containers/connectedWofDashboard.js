import { connect } from 'react-redux';
import { spinWheelOfFate } from '../actions/wheelOfFateActions';
import WofDashboard from '../components/wofDashboard';

const mapStateToProps = state => {
  return { 
    people: state.wheelOfFate.people
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ConnectedWofDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(WofDashboard);

export default ConnectedWofDashboard;
