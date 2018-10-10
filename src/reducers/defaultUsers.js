export default function defaultUsers(state = [], action) {
  switch (action.type) {
    case DEFAULT_USERS:
      return action.users;
    default:
      return state;
  }
}
