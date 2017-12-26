import { connect } from 'react-redux';
import { spinWheelOfFate } from '../actions/wheelOfFateActions';
import WofButtons from '../components/wofButtons';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    spinTheWheel: () => { dispatch(spinWheelOfFate(dispatch))}
  }
}

const ConnectedWofButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(WofButtons);

export default ConnectedWofButtons;
