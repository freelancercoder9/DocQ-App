// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Orgnaization = require("../../models/organization");
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
    const orgDetails = await Orgnaization.findOne({ organisation_id: orgId });

    if (orgDetails) {
      let respData = {};
      respData.organisationName = orgDetails.organisation_name;
      respData.organisationId = orgDetails.organisation_id;
      respData.mobileNo = orgDetails.mobile_no;
      respData.email = orgDetails.email;
      respData.country = orgDetails.country;
      respData.state = orgDetails.state;
      respData.city = orgDetails.city;
      respData.membersCount = orgDetails.members_count;

      return res.status(200).json({
        data: respData,
        code: commonResponseCodes.ORG_DETAILS_FOUND.code,
        message: commonResponseCodes.ORG_DETAILS_FOUND.message,
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
