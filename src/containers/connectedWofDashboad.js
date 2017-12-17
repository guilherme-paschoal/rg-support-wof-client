import { connect } from 'react-redux';
import WofDashboard from '../components/wofDashboard';
import { spinWheelOfFate } from '../actions/wofActions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    content: (state.wof.engineers || []),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    spinWheelOfFate: (_this) => { dispatch(spinWheelOfFate()); },
  };
};

const ConnectedWofDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(WofDashboard);

export default ConnectedWofDashboard;
