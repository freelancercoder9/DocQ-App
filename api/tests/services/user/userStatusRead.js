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
const signUpEndPoint = "/user/";

describe("Get All users by user status", () => {
  describe("Read all users", () => {
    it("Should get all users", (done) => {
      chai
        .request(baseUrl)
        .get(`/users/all`)
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
  describe("Read all pending users", () => {
    it("Should get all pending users", (done) => {
      chai
        .request(baseUrl)
        .get(`/users/pending`)
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

  describe("Read all approved users", () => {
    it("Should get all approved users", (done) => {
      chai
        .request(baseUrl)
        .get(`/users/approved`)
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

  describe("Read all rejected users", () => {
    it("Should get all rejected users", (done) => {
      chai
        .request(baseUrl)
        .get(`/users/rejected`)
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

  describe("Read all reviewed users", () => {
    it("Should get invalid status type", (done) => {
      chai
        .request(baseUrl)
        .get(`/users/reviewed`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(errCode.INVALID_USER_STATUS.code);
          expect(res.body["message"]).to.equal(
            errCode.INVALID_USER_STATUS.message
          );

          done();
        });
    });
  });
});
