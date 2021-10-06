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
    require("./services/user/userDelete");
  });

  describe("Oranization API's", () => {});

  describe("Docs API's", () => {});
});
