export function UserListReducer(state = {}, action) {
  switch (action.type) {
    case "USERS_LIST_WITH_STATUS":
      state = { ...state, ...action.payload };
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
