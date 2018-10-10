export function setDefaultStore(
  defaultUsers = [
    'Redux Person 1',
    'Redux Person 2',
    'Redux Person 3',
    'Redux Person 4',
    'Redux Person 5'
  ]
) {
  return {
    type: 'DEFAULT_USERS',
    defaultUsers
  };
}
