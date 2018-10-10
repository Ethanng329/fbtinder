export function setDefaultStore(
  defaultUsers = ['Person 1', 'Person 2', 'Person 3']
) {
  return {
    type: 'DEFAULT_USERS',
    defaultUsers
  };
}
