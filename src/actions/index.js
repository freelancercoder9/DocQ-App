export const getAllFiles = () => {
  return {
    type: "ALL_FILES",
  };
};
export const getPendingFiles = () => {
  return {
    type: "PENDING_FILES",
  };
};
export const getApprovedFiles = () => {
  return {
    type: "APPROVED_FILES",
  };
};
export const getRejectedFiles = () => {
  return {
    type: "REJECTED_FILES",
  };
};
export const setIndividual = () => {
  return {
    type: "SET_INDIVIDUAL",
  };
};
export const setOrganistion = () => {
  return {
    type: "SET_ORGANISATION",
  };
};
export const getFirstName = (firstName) => {
  return {
    type: "FIRST_NAME",
    payload: firstName,
  };
};
export const getLastName = (lastName) => {
  return {
    type: "LAST_NAME",
    payload: lastName,
  };
};
export const getEmailId = (emailId) => {
  return {
    type: "EMAIL_ID",
    payload: emailId,
  };
};
export const getCreatepwd = (createPwd) => {
  return {
    type: "CREATE_PWD",
    payload: createPwd,
  };
};
export const getConfirmPwd = (confirmPwd) => {
  return {
    type: "CONFIRM_PWD",
    payload: confirmPwd,
  };
};
export const getOrgName = (organisationName) => {
  return {
    type: "ORGANISATION_NAME",
    payload: organisationName,
  };
};
export const getUserName = (userName) => {
  return {
    type: "USER_NAME",
    payload: userName,
  };
};
export const getMobileNo = (mobileNo) => {
  return {
    type: "MOBILE_NO",
    payload: mobileNo,
  };
};
export const getCountry = (country) => {
  return {
    type: "COUNTRY",
    payload: country,
  };
};
export const getState = (userState) => {
  return {
    type: "STATE",
    payload: userState,
  };
};
export const getCity = (city) => {
  return {
    type: "CITY",
    payload: city,
  };
};
export const setRadioOrgCount = (userCount) => {
  return {
    type: "RADIO_ORGCOUNT",
    payload: userCount,
  };
};
export const selectedDocData = (selectedDocData) => {
  return {
    type: "SELECTEDDOC_DATA",
    payload: selectedDocData,
  };
};
