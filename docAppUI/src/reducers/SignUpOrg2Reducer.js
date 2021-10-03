const SignUpOrg2Reducer = (state = {}, action) => {
  switch (action.type) {
    case "STATE":
      return (state = { ...state, userState: action.payload });
    case "CITY":
      return (state = { ...state, city: action.payload });
    case "RADIO_ORGCOUNT":
      return (state = { ...state, userCount: action.payload });
    case "CREATE_PWD":
      return (state = { ...state, createPwd: action.payload });
    case "CONFIRM_PWD":
      return (state = { ...state, confirmPwd: action.payload });

    default:
      return state;
  }
};

export default SignUpOrg2Reducer;
