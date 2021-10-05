// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

("use strict");

async function process(req, res) {
  return res.status(201).json({
    data: {},
    code: 200,
    message: "Get user details",
  });
}
exports.process = process;
