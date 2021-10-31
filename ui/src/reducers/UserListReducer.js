export function UserListReducer(state = {}, action) {
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

export function getUpdatedUsersList(state = false, action) {
  switch (action.type) {
    case "GET_LATEST_USERS_LIST_TRUE":
      console.log("in reducer : true");
      return (state = true);
    case "GET_LATEST_USERS_LIST_FALSE":
      return (state = false);
    default:
      return state;
  }
}
