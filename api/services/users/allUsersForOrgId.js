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
    const orgId = req.params.orgId;
    const result = validations.validateOrgId(orgId);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    const allUsers = await Users.find({ organisation_id: orgId });
    if (!allUsers.length) {
      return res.status(400).json({
        code: commonResponseCodes.ORG_NOT_FOUND.code,
        message: commonResponseCodes.ORG_NOT_FOUND.message,
      });
    }
    let respData = [];
    allUsers.forEach(function (userData) {
      let tempUser = {};
      tempUser.firstName = userData.first_name;
      tempUser.lastName = userData.last_name;
      tempUser.mobileNo = userData.mobile_no;
      tempUser.role = userData.role;
      tempUser.status = userData.status;
      tempUser.createdTimestamp = userData.created_timestamp;
      tempUser.updatedTimestamp = userData.updated_timestamp;
      tempUser.organisationId = userData.organisation_id;
      respData.push(tempUser);
    });

    return res.status(200).json({
      data: respData,
      code: commonResponseCodes.USER_DETAILS_FOUND.code,
      message: commonResponseCodes.USER_DETAILS_FOUND.message,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
