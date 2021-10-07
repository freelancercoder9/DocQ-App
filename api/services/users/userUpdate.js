// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const User = require("../../models/user");
const commResp = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
const path = require("path");
const appConfig = require("../../appConfig").configuration;

("use strict");

async function process(req, res) {
  try {
    const {
      email,
      organisationId,
      mobileNo,
      status,
      role,
      firstName,
      lastName,
    } = req.body;
    const orgResult = validations.validateOrgId(organisationId);
    if (orgResult["status"] !== commErrorCodes.SUCCESS.status) {
      return res.status(orgResult["status"]).json({
        code: orgResult["code"],
        message: orgResult["message"],
      });
    }

    const result = validations.validateEmail(email);
    if (result["status"] !== commErrorCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    let existingUserDetails = await User.findOne({ email: email });

    if (existingUserDetails) {
      // TODO need to uncomment when token validation implemented
      // if (
      //   req.userDetails.email !== existingUserDetails.email ||
      //   req.userDetails.organisationId !== existingUserDetails.organisation_id
      // ) {
      //   return res.status(401).json({
      //     code: commResp.UNAUTHORIZED_RECIPE_OPERATION.code,
      //     message: commResp.UNAUTHORIZED_RECIPE_OPERATION.message,
      //   });
      // }

      let userDetailsToUpdate = {};
      if (mobileNo) {
        const result = validations.validateMobileNo(mobileNo);
        if (result["status"] !== commErrorCodes.SUCCESS.status) {
          return res.status(result["status"]).json({
            code: result["code"],
            message: result["message"],
          });
        }
        userDetailsToUpdate.mobile_no = mobileNo;
      }

      if (firstName) {
        const result = validations.validateFirstName(firstName);
        if (result["status"] !== commErrorCodes.SUCCESS.status) {
          return res.status(result["status"]).json({
            code: result["code"],
            message: result["message"],
          });
        }
        userDetailsToUpdate.first_name = firstName;
      }
      if (lastName) {
        const result = validations.validateLastName(lastName);
        if (result["status"] !== commErrorCodes.SUCCESS.status) {
          return res.status(result["status"]).json({
            code: result["code"],
            message: result["message"],
          });
        }
        userDetailsToUpdate.last_name = lastName;
      }
      if (role) {
        const result = validations.validateRole(role);
        if (result["status"] !== commErrorCodes.SUCCESS.status) {
          return res.status(result["status"]).json({
            code: result["code"],
            message: result["message"],
          });
        }
        userDetailsToUpdate.role = role;
      }
      if (status) {
        const result = validations.validateUserStatus(status);
        if (result["status"] !== commErrorCodes.SUCCESS.status) {
          return res.status(result["status"]).json({
            code: result["code"],
            message: result["message"],
          });
        }
        userDetailsToUpdate.status = status;
      }
      userDetailsToUpdate.updated_timestamp = new Date().toISOString();

      const updatedUserDetails = await User.findOneAndUpdate(
        { email: email },
        userDetailsToUpdate,
        { new: true }
      );

      let respData = {};
      respData.firstName = updatedUserDetails.first_name;
      respData.lastName = updatedUserDetails.last_name;
      respData.mobileNo = updatedUserDetails.mobile_no;
      respData.role = updatedUserDetails.role;
      respData.status = updatedUserDetails.status;
      respData.createdTimestamp = updatedUserDetails.created_timestamp;
      respData.organisationId = updatedUserDetails.organisation_id;
      return res.status(200).json({
        data: respData,
        code: commResp.USER_DETAILS_UPDATED.code,
        message: commResp.USER_DETAILS_UPDATED.message,
      });
    } else {
      return res.status(404).json({
        code: commResp.USER_DOESNOT_EXISTS.code,
        message: commResp.USER_DOESNOT_EXISTS.message,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
