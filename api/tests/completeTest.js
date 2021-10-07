// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

"use strict";

describe("Complete Unit Test", () => {
  describe("Utils unit tests", () => {
    require("./utils/validations");
  });

  describe("User API's", () => {
    require("./services/user/userRegister");
    require("./services/user/userLogin");
    require("./services/user/userView");
    require("./services/user/userStatusRead");
    require("./services/user/userUpdate");
    require("./services/user/userDelete");
  });

  describe("Oranization API's", () => {
    require("./services/organizations/orgRegister");
    require("./services/organizations/orgView");
    require("./services/organizations/orgUpdate");
    require("./services/organizations/orgDelete");
  });

  describe("Docs API's", () => {
    require("./services/docs/docsRead");
  });
});
