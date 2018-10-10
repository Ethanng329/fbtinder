import { connect } from 'react-redux';
import Mainpage from '../components/mainpage';
import { setDefaultStore } from '../actions';

const mapStateToProps = reduxState => {
  return {
    defaultUsers: reduxState.defaultUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDefault: () => dispatch(setDefaultStore())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mainpage);
