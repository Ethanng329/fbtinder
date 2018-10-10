export function setDefaultStore(defaultUsers) {
  return {
    type: 'DEFAULT_USERS',
    defaultUsers
  };
}

const defaultUsers = ['Person 1', 'Person 2', 'Person 3'];
