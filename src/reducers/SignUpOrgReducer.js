const SignUpOrgReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORGANISATION_NAME":
      return (state = { ...state, organisationName: action.payload });
    case "USER_NAME":
      return (state = { ...state, userName: action.payload });
    case "MOBILE_NO":
      return (state = { ...state, mobileNo: action.payload });
    case "COUNTRY":
      return (state = { ...state, country: action.payload });

    default:
      return state;
  }
};

export default SignUpOrgReducer;
