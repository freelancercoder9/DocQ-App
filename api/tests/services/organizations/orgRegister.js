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
  organisationName: "chanduthedv",
  mobileNo: "9237882257",
  email: "chanduthedev@gmail.com",
  country: "India",
  state: "AP",
  city: "Guntur",
  membersCount: 5,
};

describe("Creating Organization", () => {
  describe("Create a organization", () => {
    it("Should create organization", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.organization.create)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_CREATED.code);
          expect(res.body["message"]).to.equal(respCodes.ORG_CREATED.message);
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("organisationId");
          done();
        });
    });
  });
  describe("Organization already exists", () => {
    it("Should show user already exists error message", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.organization.create)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_ALREADY_EXISTS.code);
          expect(res.body["message"]).to.equal(
            respCodes.ORG_ALREADY_EXISTS.message
          );
          done();
        });
    });
  });
});
