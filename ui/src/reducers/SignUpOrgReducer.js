const SignUpOrgReducer = (state = {}, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return (state = { ...state, firstName: action.payload });
    case "LAST_NAME":
      return (state = { ...state, lastName: action.payload });
    case "ORGANISATION_NAME":
      return (state = { ...state, organisationName: action.payload });
    case "USER_NAME":
      return (state = { ...state, userName: action.payload });
    case "EMAIL_ID":
      return (state = { ...state, emailId: action.payload });
    case "MOBILE_NO":
      return (state = { ...state, mobileNo: action.payload });
    case "COUNTRY":
      return (state = { ...state, country: action.payload });
    case "STATE":
      return (state = { ...state, state: action.payload });
    case "CITY":
      return (state = { ...state, city: action.payload });
    case "RADIO_ORGCOUNT":
      return (state = { ...state, membersCount: action.payload });
    case "CREATE_PWD":
      return (state = { ...state, createPwd: action.payload });

    default:
      return state;
  }
};

export default SignUpOrgReducer;
