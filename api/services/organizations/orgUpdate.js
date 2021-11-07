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
  try {
    const {
      organisationId,
      email,
      mobileNo,
      state,
      city,
      country,
      membersCount,
    } = req.body;

    const result = validations.validateOrgId(organisationId);
    if (result["status"] !== commErrorCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    let existingOrgDetails = await Organisation.findOne({
      organisation_id: organisationId,
    });

    if (!existingOrgDetails) {
      return res.status(404).json({
        code: commResp.ORG_NOT_FOUND.code,
        message: commResp.ORG_NOT_FOUND.message,
      });
    }
    let orgDetailsToUpdate = {};
    if (mobileNo) {
      const result = validations.validateMobileNo(mobileNo);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.mobile_no = mobileNo;
    }

    if (email) {
      const result = validations.validateEmail(email);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.email = email;
    }

    if (country) {
      const result = validations.validateCountryName(country);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.country = country;
    }
    if (city) {
      const result = validations.validateCityName(city);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.city = city;
    }
    if (state) {
      const result = validations.validateStateName(state);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.state = state;
    }
    if (membersCount) {
      const result = validations.validateOrgMembersCount(membersCount);
      if (result["status"] !== commErrorCodes.SUCCESS.status) {
        return res.status(result["status"]).json({
          code: result["code"],
          message: result["message"],
        });
      }
      orgDetailsToUpdate.members_count = membersCount;
    }
    orgDetailsToUpdate.updated_timestamp = new Date().toISOString();

    const updatedOrgDetails = await Organisation.findOneAndUpdate(
      { email: email },
      orgDetailsToUpdate,
      { new: true }
    );

    let respData = {};
    respData.organisationName = updatedOrgDetails.organisation_name;
    respData.organisationId = updatedOrgDetails.organisation_id;
    respData.mobileNo = updatedOrgDetails.mobile_no;
    respData.email = updatedOrgDetails.email;
    respData.country = updatedOrgDetails.country;
    respData.state = updatedOrgDetails.state;
    respData.city = updatedOrgDetails.city;
    respData.membersCount = updatedOrgDetails.members_count;
    return res.status(200).json({
      data: respData,
      code: commResp.ORG_DETAILS_UPDATED.code,
      message: commResp.ORG_DETAILS_UPDATED.message,
    });

    // if (existingOrgDetails) {

    // } else {
    //   return res.status(404).json({
    //     code: commResp.ORG_NOT_FOUND.code,
    //     message: commResp.ORG_NOT_FOUND.message,
    //   });
    // }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
