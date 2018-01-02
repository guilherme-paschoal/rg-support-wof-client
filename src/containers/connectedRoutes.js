import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from '../components/routes';

export default withRouter(connect()(Routes));