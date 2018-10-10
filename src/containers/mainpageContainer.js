import { connect } from 'react-redux';
import Mainpage from '../components/mainpage';


const mapStateToProps = reduxState => {
  return {
    defaultUsers: reduxState.defaultUsers
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers())
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Mainpage);
