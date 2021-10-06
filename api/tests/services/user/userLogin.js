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

describe("Login users", () => {
  describe("Login a user", () => {
    const baseReqBody = {
      email: "chanduthedev@gmail.com",
      password: "test123",
    };

    it("Should login", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.user.login)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.LOGIN_SUCCESS.code);
          expect(res.body["message"]).to.equal(respCodes.LOGIN_SUCCESS.message);
          expect(res.body).to.have.property("data");

          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("accessToken");
          done();
        });
    });
  });
  describe("Login invalid credentials", () => {
    const baseReqBody = {
      email: "chanduthedev@gmail.com",
      password: "test1233",
    };

    it("Login should fail", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.user.login)
        .send(baseReqBody)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.INVALID_CREDENTIALS.code);
          expect(res.body["message"]).to.equal(
            respCodes.INVALID_CREDENTIALS.message
          );
          done();
        });
    });
  });
  describe("Login User id not exists ", () => {
    const baseReqBody = {
      email: "chanduthedev1@gmail.com",
      password: "test123",
    };

    it("Should show user doesn't exists", (done) => {
      chai
        .request(baseUrl)
        .post(appConfig.api.user.login)
        .send(baseReqBody)
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
