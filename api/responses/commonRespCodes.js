// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";
module.exports = {
  SUCCESS: {
    code: 200,
    message: "Success",
  },
  USER_CREATED: {
    code: 20001,
    message: "User Created successfully",
  },
  USER_DELETED: {
    code: 20002,
    message: "User deleted successfully",
  },
  LOGIN_SUCCESS: {
    code: 20003,
    message: "Login Success.",
  },
  USER_DETAILS_UPDATED: {
    code: 20004,
    message: "User Details updated successfully",
  },
  USER_DETAILS_FOUND: {
    code: 20005,
    message: "User Details found.",
  },
  ORG_CREATED: {
    code: 20006,
    message: "Organization created successfully",
  },
  ORG_DELETED: {
    code: 20006,
    message: "Organization details deleted successfully",
  },
  ORG_DETAILS_FOUND: {
    code: 20007,
    message: "Organization details found",
  },
  ORG_DETAILS_UPDATED: {
    code: 20008,
    message: "Organization details updated successfully.",
  },
  DOCS_FOUND: {
    code: 20009,
    message: "Docs found.",
  },
  USER_ALREADY_EXISTS: {
    code: 40001,
    message: "User already exists with this username or email",
  },
  INVALID_CREDENTIALS: {
    code: 40002,
    message: "Invalid username or password",
  },
  USER_DOESNOT_EXISTS: {
    code: 40003,
    message: "User doesn't exists",
  },
  USER_CREATION_ERROR: {
    code: 40004,
    message: "Error while creating user.",
  },
  USER_CREATION_EXCEPTION: {
    code: 40005,
    message: "Exception while creating user",
  },
  ORG_ALREADY_EXISTS: {
    code: 40006,
    message: "Organization name already exists.",
  },
  ORG_CREATION_ERROR: {
    code: 40007,
    message: "Error while  creating Organisation.",
  },
  ORG_CREATION_EXCEPTION: {
    code: 40008,
    message: "Exception while creating Organization",
  },
  ORG_NOT_FOUND: {
    code: 40009,
    message: "Organisation not found.",
  },
  UNAUTHORIZED_RECIPE_OPERATION: {
    code: 60005,
    message: "You are not allowed to update this recipe details.",
  },
  UNKNOWN_ERROR: {
    code: 99999,
    message: "Unknown exception",
  },
};
