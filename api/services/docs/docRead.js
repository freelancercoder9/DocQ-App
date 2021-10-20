// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

const Docs = require("../../models/doc");
const commonResponseCodes = require("../../responses/commonRespCodes");
const commonErrCodes = require("../../responses/commonErrorCodes");
const validations = require("../../utils/validations");

async function process(req, res) {
  try {
    const docsStatus = req.params.status;
    const result = validations.validateUserStatus(docsStatus);
    if (result["status"] !== commonErrCodes.SUCCESS.status) {
      return res.status(result["status"]).json({
        code: result["code"],
        message: result["message"],
      });
    }
    let allDocs = [];
    if (docsStatus === "all") {
      allDocs = await Docs.find();
    } else {
      allDocs = await Docs.find({ status: docsStatus });
    }

    return res.status(200).json({
      data: allDocs,
      code: commonResponseCodes.DOCS_FOUND.code,
      message: commonResponseCodes.DOCS_FOUND.message,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.process = process;
