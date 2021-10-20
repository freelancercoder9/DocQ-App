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

describe("Read Organization", () => {
  describe("Read Organization details", () => {
    it("Should get Organization", (done) => {
      chai
        .request(baseUrl)
        .get(`/org/chanduthedev@gmail.com`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_DETAILS_FOUND.code);
          expect(res.body["message"]).to.equal(
            respCodes.ORG_DETAILS_FOUND.message
          );
          const resBodyData = res.body.data;
          expect(resBodyData).to.have.property("organisationId");
          done();
        });
    });
  });
  describe("Get a organisation details which doesn't exists", () => {
    it("Should show organisation not exists error message", (done) => {
      chai
        .request(baseUrl)
        .get(`/org/chandu1@gmail.com`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_NOT_FOUND.code);
          expect(res.body["message"]).to.equal(respCodes.ORG_NOT_FOUND.message);
          done();
        });
    });
  });
});
