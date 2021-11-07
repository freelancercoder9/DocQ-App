// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------
"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const respCodes = require("../../../responses/commonRespCodes");
const errCodes = require("../../../responses/commonErrorCodes");
const appConfig = require("../../../appConfig").configuration;
const expect = chai.expect;

chai.use(chaiHttp);

const appHost = appConfig.appServer.host;
const appPort = appConfig.appServer.port;
const baseUrl = `${appHost}:${appPort}`;
const baseReqBody = {
  organisationId: "chanduthedev123",
  email: "chanduthedev@gmail.com",
  state: "Andhra Pradesh",
  city: "Guntur",
  membersCount: 5,
};

describe("Update Organization Details", () => {
  describe("organisationId is required while updating Organization details", () => {
    it("Should get email required error", (done) => {
      const reqBody = {
        organisationName: "chanduthedv",
        mobileNo: "9237882257",
      };
      chai
        .request(baseUrl)
        .patch(appConfig.api.organization.update)
        .send(reqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(errCodes.MISSING_ORG_ID.code);
          expect(res.body["message"]).to.equal(errCodes.MISSING_ORG_ID.message);
          done();
        });
    });
  });

  describe("Update state of the organization", () => {
    it("Should update state", (done) => {
      chai
        .request(baseUrl)
        .patch(appConfig.api.organization.update)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_DETAILS_UPDATED.code);
          expect(res.body["message"]).to.equal(
            respCodes.ORG_DETAILS_UPDATED.message
          );
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData.state).to.equal("Andhra Pradesh");
          done();
        });
    });
  });
});
