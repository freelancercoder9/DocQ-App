// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------
"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const respCodes = require("../../../responses/commonRespCodes");
const errCode = require("../../../responses/commonErrorCodes");
const appConfig = require("../../../appConfig").configuration;
const expect = chai.expect;

chai.use(chaiHttp);

const appHost = appConfig.appServer.host;
const appPort = appConfig.appServer.port;
const baseUrl = `${appHost}:${appPort}`;
const signUpEndPoint = "/users";

describe("Get All users by user status", () => {
  describe("Read all users", () => {
    it("Should get all users", (done) => {
      chai
        .request(baseUrl)
        .get(`/users`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.USER_DETAILS_FOUND.code);
          expect(res.body["message"]).to.equal(
            respCodes.USER_DETAILS_FOUND.message
          );
          expect(res.body).to.have.property("data");

          done();
        });
    });
  });
});
