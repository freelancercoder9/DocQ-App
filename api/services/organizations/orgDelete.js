// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Organisation = require("../../models/organization");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commonErrCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");

async function process(req, res) {
  try {
    const orgId = req.params.orgId;
    const result = validations.validateEmail(orgId);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    const orgDetails = await Organisation.findOneAndDelete({ email: orgId });
    if (orgDetails) {
      return res.status(200).json({
        code: commonResponseCodes.ORG_DELETED.code,
        message: commonResponseCodes.ORG_DELETED.message,
      });
    } else {
      return res.status(404).json({
        code: commonResponseCodes.ORG_NOT_FOUND.code,
        message: commonResponseCodes.ORG_NOT_FOUND.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
