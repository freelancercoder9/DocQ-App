// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";
module.exports = {
  SUCCESS: {
    status: 200,
    code: 200,
    message: "Success.",
  },
  BAD_REQUEST: {
    status: 400,
    code: 40000,
    message: "Bad request, request can't be empty",
  },
  MISSING_USERNAME: {
    status: 400,
    code: 40001,
    message: "Username is required.",
  },
  INVALID_USERNAME: {
    status: 400,
    code: 40002,
    message: "Username is invalid.",
  },
  MISSING_EMAIL: {
    status: 400,
    code: 40003,
    message: "Email id is required.",
  },
  INVALID_EMAIL: {
    status: 400,
    code: 40004,
    message: "Email id is invalid.",
  },
  MISSING_TITLE: {
    status: 400,
    code: 40005,
    message: "Recipe title is required.",
  },
  INVALID_TITLE: {
    status: 400,
    code: 40006,
    message: "Recipe title is invalid.",
  },
  MISSING_INGREDIENTS: {
    status: 400,
    code: 40007,
    message: "Recipe ingredient is required.",
  },
  INVALID_INGREDIENTS: {
    status: 400,
    code: 40008,
    message: "Recipe ingredient is invalid.",
  },
  MISSING_INSTRUCTIONS: {
    status: 400,
    code: 40009,
    message: "Recipe instructions is required.",
  },
  INVALID_INSTRUCTIONS: {
    status: 400,
    code: 40010,
    message: "Recipe instructions is invalid.",
  },
  MISSING_IMAGE: {
    status: 400,
    code: 40009,
    message: "Recipe image is required.",
  },
  INVALID_IMAGE: {
    status: 400,
    code: 40010,
    message: "Recipe image is invalid.",
  },
  MISSING_PASSWORD: {
    status: 400,
    code: 40011,
    message: "Password is required.",
  },
  INVALID_PASSWORD_FORMAT: {
    status: 400,
    code: 40012,
    message: "Password formtat is invalid.",
  },
  INVALID_USERNAME_LENGTH: {
    status: 400,
    code: 40013,
    message: "Username length should be betwen 6 and 32 letters.",
  },
  INVALID_PASSWORD_LENGTH: {
    status: 400,
    code: 40014,
    message: "Password length should be betwen 6 and 32 letters.",
  },
  TOKEN_EXPIRED: {
    status: 400,
    code: 40015,
    message: "Access token expired",
  },
  TOKEN_MISMATCH: {
    status: 400,
    code: 40016,
    message: "Access token mismatch",
  },
  TOKEN_VERIFY_EXCEPTION: {
    status: 400,
    code: 40017,
    message: "Exception while verifying access token",
  },
  USER_NEEDS_LOGIN: {
    status: 400,
    code: 40018,
    message: "User needs to login.",
  },
  INVALID_RECIPE_TITLE_LENGTH: {
    status: 400,
    code: 40019,
    message: "Recipe title length should be betwen 6 and 32 letters only.",
  },
  MISSING_FIRST_NAME: {
    status: 400,
    code: 40020,
    message: "First Name is required.",
  },
  INVALID_FIRST_NAME: {
    status: 400,
    code: 40021,
    message: "First name is invalid.",
  },
  INVALID_FIRST_NAME_LENGTH: {
    status: 400,
    code: 40022,
    message: "First name length should be between 2 and 64",
  },
  MISSING_LAST_NAME: {
    status: 400,
    code: 40023,
    message: "Last Name is required.",
  },
  INVALID_LAST_NAME: {
    status: 400,
    code: 40024,
    message: "Last name is invalid.",
  },
  INVALID_LAST_NAME_LENGTH: {
    status: 400,
    code: 40025,
    message: "Last name length should be between 2 and 64",
  },
  MISSING_MOBILE_NO: {
    status: 400,
    code: 40026,
    message: "Mobile Number is required.",
  },
  INVALID_MOBILE_NO: {
    status: 400,
    code: 40027,
    message: "Mobile Number is invalid.",
  },
  INVALID_MOBILE_NO_LENGTH: {
    status: 400,
    code: 40028,
    message: "Mobile number length should be between 8 and 13",
  },
  MISSING_ROLE: {
    status: 400,
    code: 40029,
    message: "User role is required.",
  },
  INVALID_ROLE: {
    status: 400,
    code: 40030,
    message: "Role is invalid.",
  },
  MISSING_USER_STATUS: {
    status: 400,
    code: 40031,
    message: "User Status is required.",
  },
  INVALID_USER_STATUS: {
    status: 400,
    code: 40032,
    message: "User status is invalid.",
  },
  MISSING_ORG_NAME: {
    status: 400,
    code: 40033,
    message: "Organization Name is required.",
  },
  INVALID_ORG_NAME: {
    status: 400,
    code: 40034,
    message: "Organization name is invalid.",
  },
  INVALID_ORG_NAME_LENGTH: {
    status: 400,
    code: 40035,
    message: "Organization name length should be between 4 and 64",
  },
  MISSING_COUNTRY_NAME: {
    status: 400,
    code: 40036,
    message: "Country Name is required.",
  },
  INVALID_COUNTRY_NAME: {
    status: 400,
    code: 40037,
    message: "Country name is invalid.",
  },
  INVALID_COUNTRY_NAME_LENGTH: {
    status: 400,
    code: 40038,
    message: "Country name length should be between 4 and 56",
  },
  MISSING_CITY_NAME: {
    status: 400,
    code: 40039,
    message: "City Name is required.",
  },
  INVALID_CITY_NAME: {
    status: 400,
    code: 40040,
    message: "City name is invalid.",
  },
  INVALID_CITY_NAME_LENGTH: {
    status: 400,
    code: 40041,
    message: "City name length should be between 2 and 64",
  },
  MISSING_STATE_NAME: {
    status: 400,
    code: 40042,
    message: "State Name is required.",
  },
  INVALID_STATE_NAME: {
    status: 400,
    code: 40043,
    message: "State name is invalid.",
  },
  INVALID_STATE_NAME_LENGTH: {
    status: 400,
    code: 40044,
    message: "State name length should be between 2 and 64",
  },
  MISSING_ORG_ID: {
    status: 400,
    code: 40045,
    message: "Organization ID is required.",
  },
  INVALID_ORG_ID: {
    status: 400,
    code: 40046,
    message: "Organization ID is invalid.",
  },
};
