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
  firstName: "Chandu1",
  email: "chanduthedev@gmail.com",
  organisationId: "123",
  status: "approved",
};

describe("Update User Details", () => {
  describe("Email is required while updating user details", () => {
    it("Should get email required error", (done) => {
      const reqBody = {
        firstName: "Chandu1",
        organisationId: "123",
        status: "approved",
      };
      chai
        .request(baseUrl)
        .patch(appConfig.api.user.update)
        .send(reqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(errCodes.MISSING_EMAIL.code);
          expect(res.body["message"]).to.equal(errCodes.MISSING_EMAIL.message);
          done();
        });
    });
  });
  describe("Organisation id is required while updating user details", () => {
    it("Should get organisation id required error", (done) => {
      const reqBody = {
        firstName: "Chandu1",
        email: "chanduthedev@gmail.com",
        status: "approved",
      };
      chai
        .request(baseUrl)
        .patch(appConfig.api.user.update)
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
  describe("Update user status", () => {
    it("Should update user status", (done) => {
      chai
        .request(baseUrl)
        .patch(appConfig.api.user.update)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(
            respCodes.USER_DETAILS_UPDATED.code
          );
          expect(res.body["message"]).to.equal(
            respCodes.USER_DETAILS_UPDATED.message
          );
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("createdTimestamp");
          expect(resBodyData).to.have.property("firstName");
          expect(resBodyData.firstName).to.equal("Chandu1");
          expect(resBodyData).to.have.property("status");
          expect(resBodyData.status).to.equal("approved");
          done();
        });
    });
  });
  // describe("User already exists", () => {
  //   const requestBody = {};
  //   requestBody["userName"] = "chandu";
  //   requestBody["password"] = "test123";
  //   requestBody["email"] = "chanduthedev@gmail.com";

  //   it("Should show user already exists error message", (done) => {
  //     chai
  //       .request(baseUrl)
  //       .post(appConfig.api.user.create)
  //       .send(baseReqBody)
  //       .end((err, res) => {
  //         if (err) {
  //           console.log(err);
  //           throw new Error("API Error");
  //         }
  //         expect(res.body["code"]).to.equal(respCodes.USER_ALREADY_EXISTS.code);
  //         expect(res.body["message"]).to.equal(
  //           respCodes.USER_ALREADY_EXISTS.message
  //         );
  //         done();
  //       });
  //   });
  // });
});
