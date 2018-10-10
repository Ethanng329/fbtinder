import { combineReducers } from 'redux';
import setDefaultUsers from './setDefaultUsers';

export default combineReducers({
  defaultUsers: setDefaultUsers
});
