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

describe("Delete Organizations", () => {
  describe("Delete a Organization", () => {
    it("Should delete Organization", (done) => {
      chai
        .request(baseUrl)
        .delete(`/org/chanduthedev@gmail.com`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.ORG_DELETED.code);
          expect(res.body["message"]).to.equal(respCodes.ORG_DELETED.message);
          done();
        });
    });
  });
  describe("Delete a Organization which doesn't exists", () => {
    it("Should show Organization not exists error message", (done) => {
      chai
        .request(baseUrl)
        .delete(`/org/chandu1@gmail.com`)
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
