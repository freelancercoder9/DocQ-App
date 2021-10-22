function UserListReducer(state = {}, action) {
  switch (action.type) {
    case "GET_EXISTING_USER_LIST":
      state = { ...state, existingUsers: action.payload };
      return state;
    case "GET_NEW_JOIN_USER_LIST":
      state = { ...state, newJoinUsers: action.payload };
      return state;
    default:
      return state;
  }
}

export default UserListReducer;
