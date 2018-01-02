import { connect } from 'react-redux';
import EngineerPicker from '../components/ShiftHistory/engineerPicker';
import { getEngineers } from '../actions/engineerActions';

const mapStateToProps = (state) => {
  return({ engineers: state.engineers.engineers })
}

const mapDispatchToProps = (dispatch) => {
  return({
    getEngineers: () => { 
      dispatch(getEngineers()); 
    }
  });
}

const ConnectedEngineerPicker = connect(mapStateToProps, mapDispatchToProps)(EngineerPicker);

export default ConnectedEngineerPicker;

