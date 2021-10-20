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
const baseReqBody = {
  firstName: "Chandu",
  lastName: "Pasumarthi",
  mobileNo: "9237882257",
  email: "chanduthedev@gmail.com",
  role: "admin",
  organisationId: "123",
  password: "test123",
};

describe("Creating users", () => {
  describe("Create a user", () => {
    it("Should create user", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.user.create)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.USER_CREATED.code);
          expect(res.body["message"]).to.equal(respCodes.USER_CREATED.message);
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("createdTimestamp");
          expect(resBodyData).to.have.property("firstName");
          expect(resBodyData.firstName).to.equal("Chandu");
          done();
        });
    });
  });
  describe("User already exists", () => {
    const requestBody = {};
    requestBody["userName"] = "chandu";
    requestBody["password"] = "test123";
    requestBody["email"] = "chanduthedev@gmail.com";

    it("Should show user already exists error message", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.user.create)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.USER_ALREADY_EXISTS.code);
          expect(res.body["message"]).to.equal(
            respCodes.USER_ALREADY_EXISTS.message
          );
          done();
        });
    });
  });
});
