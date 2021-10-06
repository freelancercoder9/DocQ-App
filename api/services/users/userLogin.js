// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Users = require("../../models/user");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commErrorCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");
const path = require("path");
const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

async function processRequest(req, res) {
  let reqBody = req.body;
  const { email, password } = reqBody;

  try {
    const result = validations.validateLoginUserRequestBody(reqBody);
    if (result["status"] !== commErrorCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }

    let userDetails = await Users.findOne({ email: email });

    if (userDetails) {
      const validPassword = await validations.validatePassword(
        password,
        userDetails.password
      );

      if (!validPassword) {
        return res.status(400).json({
          code: commonResponseCodes.INVALID_CREDENTIALS.code,
          message: commonResponseCodes.INVALID_CREDENTIALS.message,
        });
      }

      const accessToken = jwt.sign(
        { userName: email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      let respData = {};
      respData["firstName"] = userDetails.first_name;
      respData["lastName"] = userDetails.last_name;
      respData["email"] = userDetails.email;
      respData["mobileNo"] = userDetails.mobile_no;
      respData["role"] = userDetails.role;
      respData["status"] = userDetails.status;
      respData["createdTimestamp"] = userDetails.created_timestamp;
      respData["accessToken"] = accessToken;

      return res.status(200).json({
        data: respData,
        message: commonResponseCodes.LOGIN_SUCCESS.message,
        code: commonResponseCodes.LOGIN_SUCCESS.code,
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
exports.processRequest = processRequest;
