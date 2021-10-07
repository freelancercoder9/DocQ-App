// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------
"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const respCodes = require("../../../responses/commonRespCodes");
const appConfig = require("../../../appConfig").configuration;
const expect = chai.expect;

chai.use(chaiHttp);

const appHost = appConfig.appServer.host;
const appPort = appConfig.appServer.port;
const baseUrl = `${appHost}:${appPort}`;
const signUpEndPoint = "/user/";

describe("Get user details", () => {
  describe("Read a user", () => {
    it("Should get user details", (done) => {
      chai
        .request(baseUrl)
        .get(`/user/chanduthedev@gmail.com`)
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

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("mobileNo");
          expect(resBodyData).to.have.property("status");
          expect(resBodyData).to.have.property("role");
          expect(resBodyData).to.have.property("firstName");
          expect(resBodyData).to.have.property("lastName");
          expect(resBodyData).to.have.property("organisationId");
          done();
        });
    });
  });
  describe("Get user details which doesn't exists", () => {
    it("Should get user not exists error message", (done) => {
      chai
        .request(baseUrl)
        .get(`/user/chandu1@gmail.com`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.USER_DOESNOT_EXISTS.code);
          expect(res.body["message"]).to.equal(
            respCodes.USER_DOESNOT_EXISTS.message
          );
          done();
        });
    });
  });
});
