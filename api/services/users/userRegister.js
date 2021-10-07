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
  const userDetails = req.body;
  const result = validations.validateCreateUserRequestBody(userDetails);
  if (result["status"] !== commErrorCodes.SUCCESS.status) {
    return res.status(result["status"]).json({
      code: result["code"],
      message: result["message"],
    });
  }

  const hashedPassword = await validations.hashPassword(userDetails.password);

  const user = new User({
    first_name: userDetails.firstName,
    last_name: userDetails.lastName,
    email: userDetails.email,
    role: userDetails.role,
    mobile_no: userDetails.mobileNo,
    organisation_id: userDetails.organisationId,
    password: hashedPassword,
    status: appConfig.userStatus.pending,
    created_timestamp: new Date().toISOString().replace(/T/, " "),
  });

  try {
    const existingUser = await User.find({ email: userDetails.email });
    if (existingUser.length) {
      return res.status(400).json({
        code: commResp.USER_ALREADY_EXISTS.code,
        message: commResp.USER_ALREADY_EXISTS.message,
      });
    }

    const newUser = await user.save();

    if (newUser) {
      return res.status(201).json({
        data: newUser,
        code: commResp.USER_CREATED.code,
        message: commResp.USER_CREATED.message,
      });
    } else {
      return res.status(400).json({
        code: commResp.USER_CREATION_ERROR.code,
        message: commResp.USER_CREATION_ERROR.message,
      });
    }
  } catch (err) {
    console.log("exception:%s", err);
    return res.status(400).json({
      code: commResp.USER_CREATION_EXCEPTION.code,
      message: commResp.USER_CREATION_EXCEPTION.message,
    });
  }
}
exports.process = process;
