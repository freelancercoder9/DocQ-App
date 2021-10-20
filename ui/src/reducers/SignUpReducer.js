const SignUpReducer = (state = "IND", action) => {
  switch (action.type) {
    case "SET_INDIVIDUAL":
      state = "IND";
      return state;
    case "SET_ORGANISATION":
      state = "ORG";
      return state;
    default:
      return state;
  }
};
export default SignUpReducer;
