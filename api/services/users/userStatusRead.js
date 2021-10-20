// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commonErrCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");

async function process(req, res) {
  try {
    const userStatus = req.params.status;
    const result = validations.validateUserStatus(userStatus);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    let allUsers = [];
    if (userStatus === "all") {
      allUsers = await Users.find();
    } else {
      allUsers = await Users.find({ status: userStatus });
    }

    return res.status(200).json({
      data: allUsers,
      code: commonResponseCodes.USER_DETAILS_FOUND.code,
      message: commonResponseCodes.USER_DETAILS_FOUND.message,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
