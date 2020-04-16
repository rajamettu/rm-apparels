import UserActionTypes from '../user/user-types';

const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
