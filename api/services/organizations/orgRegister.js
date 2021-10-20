// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const Organisation = require("../../models/organization");
const commResp = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
const path = require("path");
const appConfig = require("../../appConfig").configuration;

("use strict");

async function process(req, res) {
  const orgDetails = req.body;
  const result = validations.validateCreateOrgRequestBody(orgDetails);
  if (result["status"] !== commErrorCodes.SUCCESS.status) {
    return res.status(result["status"]).json({
      code: result["code"],
      message: result["message"],
    });
  }

  try {
    const existingOrg = await Organisation.find({ email: orgDetails.email });
    if (existingOrg.length) {
      return res.status(400).json({
        code: commResp.ORG_ALREADY_EXISTS.code,
        message: commResp.ORG_ALREADY_EXISTS.message,
      });
    }

    const createdOrgDetails = new Organisation({
      organisation_name: orgDetails.organisationName,
      email: orgDetails.email,
      mobile_no: orgDetails.mobileNo,
      organisation_id: orgDetails.organisationName.replace(/\s/g, ""),
      country: orgDetails.country,
      city: orgDetails.city,
      state: orgDetails.state,
      members_count: orgDetails.membersCount,
      created_timestamp: new Date().toISOString().replace(/T/, " "),
    });

    const newOrg = await createdOrgDetails.save();

    if (newOrg) {
      let respData = {};
      respData.organisationName = newOrg.organisation_name;
      respData.organisationId = newOrg.organisation_id;
      respData.mobileNo = newOrg.mobile_no;
      respData.email = newOrg.email;
      respData.country = newOrg.country;
      respData.state = newOrg.state;
      respData.city = newOrg.city;
      respData.membersCount = newOrg.members_count;
      return res.status(201).json({
        data: respData,
        code: commResp.ORG_CREATED.code,
        message: commResp.ORG_CREATED.message,
      });
    } else {
      return res.status(400).json({
        code: commResp.ORG_CREATION_ERROR.code,
        message: commResp.ORG_CREATION_ERROR.message,
      });
    }
  } catch (err) {
    return res.status(400).json({
      code: commResp.ORG_CREATION_EXCEPTION.code,
      message: commResp.ORG_CREATION_EXCEPTION.message,
    });
  }
}
exports.process = process;
