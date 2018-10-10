export default function setDefaultUsers(state = [], action) {
  switch (action.type) {
    case 'DEFAULT_USERS':
      return action.defaultUsers;
    default:
      return state;
  }
}
