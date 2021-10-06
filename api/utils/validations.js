// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const validator = require("email-validator");
const bcrypt = require("bcrypt");
const commonErrorCodes = require("../responses/commonErrorCodes");
const appConstants = require("./constants");
const User = require("../models/user");
const path = require("path");
const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
exports.hashPassword = hashPassword;

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
exports.validatePassword = validatePassword;

function validateUserName(userName) {
  if (typeof userName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_USERNAME.status,
      code: commonErrorCodes.MISSING_USERNAME.code,
      message: commonErrorCodes.MISSING_USERNAME.message,
    };
  }
  if (!userName) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }
  if (userName && (userName.length === 0 || typeof userName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }
  if (userName && (userName.length < 6 || userName.length > 32)) {
    return {
      status: commonErrorCodes.INVALID_USERNAME_LENGTH.status,
      code: commonErrorCodes.INVALID_USERNAME_LENGTH.code,
      message: commonErrorCodes.INVALID_USERNAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateUserName = validateUserName;

function validateOrgName(orgName) {
  if (typeof orgName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_ORG_NAME.status,
      code: commonErrorCodes.MISSING_ORG_NAME.code,
      message: commonErrorCodes.MISSING_ORG_NAME.message,
    };
  }
  if (!orgName) {
    return {
      status: commonErrorCodes.INVALID_ORG_NAME.status,
      code: commonErrorCodes.INVALID_ORG_NAME.code,
      message: commonErrorCodes.INVALID_ORG_NAME.message,
    };
  }
  if (orgName && (orgName.length === 0 || typeof orgName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_ORG_NAME.status,
      code: commonErrorCodes.INVALID_ORG_NAME.code,
      message: commonErrorCodes.INVALID_ORG_NAME.message,
    };
  }
  if (orgName && (orgName.length < 4 || orgName.length > 64)) {
    return {
      status: commonErrorCodes.INVALID_ORG_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_ORG_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_ORG_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateOrgName = validateOrgName;

function validateCountryName(countryName) {
  if (typeof countryName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_COUNTRY_NAME.status,
      code: commonErrorCodes.MISSING_COUNTRY_NAME.code,
      message: commonErrorCodes.MISSING_COUNTRY_NAME.message,
    };
  }
  if (!countryName) {
    return {
      status: commonErrorCodes.INVALID_COUNTRY_NAME.status,
      code: commonErrorCodes.INVALID_COUNTRY_NAME.code,
      message: commonErrorCodes.INVALID_COUNTRY_NAME.message,
    };
  }
  if (
    countryName &&
    (countryName.length === 0 || typeof countryName !== "string")
  ) {
    return {
      status: commonErrorCodes.INVALID_COUNTRY_NAME.status,
      code: commonErrorCodes.INVALID_COUNTRY_NAME.code,
      message: commonErrorCodes.INVALID_COUNTRY_NAME.message,
    };
  }
  if (countryName && (countryName.length < 4 || countryName.length > 56)) {
    return {
      status: commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateCountryName = validateCountryName;

function validateCityName(cityName) {
  if (typeof cityName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_CITY_NAME.status,
      code: commonErrorCodes.MISSING_CITY_NAME.code,
      message: commonErrorCodes.MISSING_CITY_NAME.message,
    };
  }
  if (!cityName) {
    return {
      status: commonErrorCodes.INVALID_CITY_NAME.status,
      code: commonErrorCodes.INVALID_CITY_NAME.code,
      message: commonErrorCodes.INVALID_CITY_NAME.message,
    };
  }
  if (cityName && (cityName.length === 0 || typeof cityName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_CITY_NAME.status,
      code: commonErrorCodes.INVALID_CITY_NAME.code,
      message: commonErrorCodes.INVALID_CITY_NAME.message,
    };
  }
  if (cityName && (cityName.length < 2 || cityName.length > 64)) {
    return {
      status: commonErrorCodes.INVALID_CITY_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_CITY_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_CITY_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateCityName = validateCityName;

function validateStateName(stateName) {
  if (typeof stateName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_STATE_NAME.status,
      code: commonErrorCodes.MISSING_STATE_NAME.code,
      message: commonErrorCodes.MISSING_STATE_NAME.message,
    };
  }
  if (!stateName) {
    return {
      status: commonErrorCodes.INVALID_STATE_NAME.status,
      code: commonErrorCodes.INVALID_STATE_NAME.code,
      message: commonErrorCodes.INVALID_STATE_NAME.message,
    };
  }
  if (stateName && (stateName.length === 0 || typeof stateName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_STATE_NAME.status,
      code: commonErrorCodes.INVALID_STATE_NAME.code,
      message: commonErrorCodes.INVALID_STATE_NAME.message,
    };
  }
  if (stateName && (stateName.length < 2 || stateName.length > 64)) {
    return {
      status: commonErrorCodes.INVALID_STATE_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_STATE_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_STATE_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateStateName = validateStateName;

function validateOrgId(orgId) {
  if (typeof orgId === "undefined") {
    return {
      status: commonErrorCodes.MISSING_ORG_ID.status,
      code: commonErrorCodes.MISSING_ORG_ID.code,
      message: commonErrorCodes.MISSING_ORG_ID.message,
    };
  }
  if (!orgId) {
    return {
      status: commonErrorCodes.INVALID_ORG_ID.status,
      code: commonErrorCodes.INVALID_ORG_ID.code,
      message: commonErrorCodes.INVALID_ORG_ID.message,
    };
  }
  if (orgId && orgId.length === 0) {
    return {
      status: commonErrorCodes.INVALID_ORG_ID.status,
      code: commonErrorCodes.INVALID_ORG_ID.code,
      message: commonErrorCodes.INVALID_ORG_ID.message,
    };
  }
  return commonErrorCodes.SUCCESS;
}
exports.validateOrgId = validateOrgId;

function validateFirstName(firstName) {
  if (typeof firstName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_FIRST_NAME.status,
      code: commonErrorCodes.MISSING_FIRST_NAME.code,
      message: commonErrorCodes.MISSING_FIRST_NAME.message,
    };
  }
  if (!firstName) {
    return {
      status: commonErrorCodes.INVALID_FIRST_NAME.status,
      code: commonErrorCodes.INVALID_FIRST_NAME.code,
      message: commonErrorCodes.INVALID_FIRST_NAME.message,
    };
  }
  if (firstName && (firstName.length === 0 || typeof firstName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_FIRST_NAME.status,
      code: commonErrorCodes.INVALID_FIRST_NAME.code,
      message: commonErrorCodes.INVALID_FIRST_NAME.message,
    };
  }
  if (firstName && (firstName.length < 2 || firstName.length > 64)) {
    return {
      status: commonErrorCodes.INVALID_FIRST_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_FIRST_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_FIRST_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}

exports.validateFirstName = validateFirstName;

function validateLastName(lastName) {
  if (typeof lastName === "undefined") {
    return {
      status: commonErrorCodes.MISSING_LAST_NAME.status,
      code: commonErrorCodes.MISSING_LAST_NAME.code,
      message: commonErrorCodes.MISSING_LAST_NAME.message,
    };
  }
  if (!lastName) {
    return {
      status: commonErrorCodes.INVALID_LAST_NAME.status,
      code: commonErrorCodes.INVALID_LAST_NAME.code,
      message: commonErrorCodes.INVALID_LAST_NAME.message,
    };
  }
  if (lastName && (lastName.length === 0 || typeof lastName !== "string")) {
    return {
      status: commonErrorCodes.INVALID_LAST_NAME.status,
      code: commonErrorCodes.INVALID_LAST_NAME.code,
      message: commonErrorCodes.INVALID_LAST_NAME.message,
    };
  }
  if (lastName && (lastName.length < 2 || lastName.length > 64)) {
    return {
      status: commonErrorCodes.INVALID_LAST_NAME_LENGTH.status,
      code: commonErrorCodes.INVALID_LAST_NAME_LENGTH.code,
      message: commonErrorCodes.INVALID_LAST_NAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}

exports.validateLastName = validateLastName;

function validateRole(userRole) {
  if (typeof userRole === "undefined") {
    return {
      status: commonErrorCodes.MISSING_ROLE.status,
      code: commonErrorCodes.MISSING_ROLE.code,
      message: commonErrorCodes.MISSING_ROLE.message,
    };
  }
  if (!userRole) {
    return {
      status: commonErrorCodes.INVALID_ROLE.status,
      code: commonErrorCodes.INVALID_ROLE.code,
      message: commonErrorCodes.INVALID_ROLE.message,
    };
  }
  if (userRole && (userRole.length === 0 || typeof userRole !== "string")) {
    return {
      status: commonErrorCodes.INVALID_ROLE.status,
      code: commonErrorCodes.INVALID_ROLE.code,
      message: commonErrorCodes.INVALID_ROLE.message,
    };
  }
  if (!appConstants.roles.includes(userRole)) {
    return {
      status: commonErrorCodes.INVALID_ROLE.status,
      code: commonErrorCodes.INVALID_ROLE.code,
      message: commonErrorCodes.INVALID_ROLE.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}

exports.validateRole = validateRole;

function validateUserStatus(userStatus) {
  if (typeof userStatus === "undefined") {
    return {
      status: commonErrorCodes.MISSING_USER_STATUS.status,
      code: commonErrorCodes.MISSING_USER_STATUS.code,
      message: commonErrorCodes.MISSING_USER_STATUS.message,
    };
  }
  if (!userStatus) {
    return {
      status: commonErrorCodes.INVALID_USER_STATUS.status,
      code: commonErrorCodes.INVALID_USER_STATUS.code,
      message: commonErrorCodes.INVALID_USER_STATUS.message,
    };
  }
  if (
    userStatus &&
    (userStatus.length === 0 || typeof userStatus !== "string")
  ) {
    return {
      status: commonErrorCodes.INVALID_USER_STATUS.status,
      code: commonErrorCodes.INVALID_USER_STATUS.code,
      message: commonErrorCodes.INVALID_USER_STATUS.message,
    };
  }

  if (!appConstants.userStatusList.includes(userStatus)) {
    return {
      status: commonErrorCodes.INVALID_USER_STATUS.status,
      code: commonErrorCodes.INVALID_USER_STATUS.code,
      message: commonErrorCodes.INVALID_USER_STATUS.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}

exports.validateUserStatus = validateUserStatus;

function validateMobileNo(mobileNo) {
  if (typeof mobileNo === "undefined") {
    return {
      status: commonErrorCodes.MISSING_USERNAME.status,
      code: commonErrorCodes.MISSING_USERNAME.code,
      message: commonErrorCodes.MISSING_USERNAME.message,
    };
  }
  if (!mobileNo) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }
  if (mobileNo && mobileNo.length === 0) {
    return {
      status: commonErrorCodes.INVALID_USERNAME.status,
      code: commonErrorCodes.INVALID_USERNAME.code,
      message: commonErrorCodes.INVALID_USERNAME.message,
    };
  }
  if (mobileNo && (mobileNo.length < 8 || mobileNo.length > 13)) {
    return {
      status: commonErrorCodes.INVALID_USERNAME_LENGTH.status,
      code: commonErrorCodes.INVALID_USERNAME_LENGTH.code,
      message: commonErrorCodes.INVALID_USERNAME_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}

exports.validateMobileNo = validateMobileNo;

function validateEmail(email) {
  if (typeof email === "undefined") {
    return {
      status: commonErrorCodes.MISSING_EMAIL.status,
      code: commonErrorCodes.MISSING_EMAIL.code,
      message: commonErrorCodes.MISSING_EMAIL.message,
    };
  }
  if (!email) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }
  if (email && (email.length === 0 || typeof email !== "string")) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }
  if (!validator.validate(email)) {
    return {
      status: commonErrorCodes.INVALID_EMAIL.status,
      code: commonErrorCodes.INVALID_EMAIL.code,
      message: commonErrorCodes.INVALID_EMAIL.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validateEmail = validateEmail;

function validatePasswordFormat(password) {
  if (typeof password === "undefined") {
    return {
      status: commonErrorCodes.MISSING_PASSWORD.status,
      code: commonErrorCodes.MISSING_PASSWORD.code,
      message: commonErrorCodes.MISSING_PASSWORD.message,
    };
  }
  if (!password) {
    return {
      status: commonErrorCodes.INVALID_PASSWORD_FORMAT.status,
      code: commonErrorCodes.INVALID_PASSWORD_FORMAT.code,
      message: commonErrorCodes.INVALID_PASSWORD_FORMAT.message,
    };
  }
  if (password && (password.length === 0 || typeof password !== "string")) {
    return {
      status: commonErrorCodes.INVALID_PASSWORD_FORMAT.status,
      code: commonErrorCodes.INVALID_PASSWORD_FORMAT.code,
      message: commonErrorCodes.INVALID_PASSWORD_FORMAT.message,
    };
  }

  if (password && (password.length < 6 || password.length > 32)) {
    return {
      status: commonErrorCodes.INVALID_PASSWORD_LENGTH.status,
      code: commonErrorCodes.INVALID_PASSWORD_LENGTH.code,
      message: commonErrorCodes.INVALID_PASSWORD_LENGTH.message,
    };
  }

  return commonErrorCodes.SUCCESS;
}
exports.validatePasswordFormat = validatePasswordFormat;

function validateCreateUserRequestBody(requestBody) {
  try {
    if (Object.keys(requestBody).length === 0) {
      return {
        status: commonErrorCodes.BAD_REQUEST.status,
        code: commonErrorCodes.BAD_REQUEST.code,
        message: commonErrorCodes.BAD_REQUEST.message,
      };
    }

    const checkOrgId = validateOrgId(requestBody.organisationId);
    if (checkOrgId["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkOrgId;
    }

    const checkFirstName = validateFirstName(requestBody.firstName);
    if (checkFirstName["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkFirstName;
    }

    const checkLastName = validateLastName(requestBody.lastName);
    if (checkLastName["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkLastName;
    }

    const checkEmail = validateEmail(requestBody.email);
    if (checkEmail["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkEmail;
    }

    const checkMobileNo = validateMobileNo(requestBody.mobileNo);
    if (checkMobileNo["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkMobileNo;
    }

    const checkRole = validateRole(requestBody.role);
    if (checkRole["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkRole;
    }

    const checkPasswordFormat = validatePasswordFormat(requestBody.password);
    if (checkPasswordFormat["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkPasswordFormat;
    }

    return commonErrorCodes.SUCCESS;
  } catch (e) {
    console.log(e);
    return {
      status: commonErrorCodes.BAD_REQUEST.status,
      code: commonErrorCodes.BAD_REQUEST.code,
      message: commonErrorCodes.BAD_REQUEST.message,
    };
  }
}
exports.validateCreateUserRequestBody = validateCreateUserRequestBody;

function validateLoginUserRequestBody(requestBody) {
  try {
    if (Object.keys(requestBody).length === 0) {
      return {
        status: commonErrorCodes.BAD_REQUEST.status,
        code: commonErrorCodes.BAD_REQUEST.code,
        message: commonErrorCodes.BAD_REQUEST.message,
      };
    }
    const checkEmail = validateEmail(requestBody.email);
    if (checkEmail["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkEmail;
    }
    const checkPasswordFormat = validatePasswordFormat(requestBody.password);
    if (checkPasswordFormat["status"] !== commonErrorCodes.SUCCESS.status) {
      return checkPasswordFormat;
    }

    return commonErrorCodes.SUCCESS;
  } catch (e) {
    console.log(e);
    return {
      status: commonErrorCodes.BAD_REQUEST.status,
      code: commonErrorCodes.BAD_REQUEST.code,
      message: commonErrorCodes.BAD_REQUEST.message,
    };
  }
}
exports.validateLoginUserRequestBody = validateLoginUserRequestBody;

async function allowIfLoggedin(req, res, next) {
  try {
    const userDetails = res.locals.loggedInUser;
    if (!userDetails)
      return res.status(401).json({
        message: commonErrorCodes.USER_NEEDS_LOGIN.message,
        code: commonErrorCodes.USER_NEEDS_LOGIN.code,
      });
    req.userDetails = userDetails;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}
exports.allowIfLoggedin = allowIfLoggedin;

async function validateToken(req, res, next) {
  try {
    if (req.headers["x-access-token"]) {
      try {
        const accessToken = req.headers["x-access-token"];
        const { userName, exp } = await jwt.verify(
          accessToken,
          process.env.JWT_SECRET
        );
        // If token has expired
        if (exp < Date.now().valueOf() / 1000) {
          return res.status(401).json({
            error: commonErrorCodes.TOKEN_EXPIRED.message,
            code: commonErrorCodes.TOKEN_EXPIRED.code,
          });
        }

        const userDetails = await User.findOne({
          user_name: userName,
        });
        res.locals.loggedInUser = {
          userName: userDetails.user_name,
          email: userDetails.email,
        };
        next();
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          message: commonErrorCodes.TOKEN_VERIFY_EXCEPTION.message,
          code: commonErrorCodes.TOKEN_VERIFY_EXCEPTION.code,
        });
        // next(error);
      }
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

exports.validateToken = validateToken;
