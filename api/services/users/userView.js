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
    const userId = req.params.id;
    const result = validations.validateEmail(userId);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    const userDetails = await Users.findOne({ email: userId });

    if (userDetails) {
      let respData = {};
      respData.firstName = userDetails.first_name;
      respData.lastName = userDetails.last_name;
      respData.mobileNo = userDetails.mobile_no;
      respData.role = userDetails.role;
      respData.status = userDetails.status;
      respData.createdTimestamp = userDetails.created_timestamp;
      respData.organisationId = userDetails.organisation_id;

      return res.status(200).json({
        data: respData,
        code: commonResponseCodes.USER_DETAILS_FOUND.code,
        message: commonResponseCodes.USER_DETAILS_FOUND.message,
      });
    } else {
      return res.status(404).json({
        code: commonResponseCodes.USER_DOESNOT_EXISTS.code,
        message: commonResponseCodes.USER_DOESNOT_EXISTS.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
