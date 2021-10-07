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

describe("Get All docs by status", () => {
  describe("Read all docs", () => {
    it("Should get all docs", (done) => {
      chai
        .request(baseUrl)
        .get(`/docs/all`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.DOCS_FOUND.code);
          expect(res.body["message"]).to.equal(respCodes.DOCS_FOUND.message);
          expect(res.body).to.have.property("data");

          done();
        });
    });
  });
  describe("Read all pending docs", () => {
    it("Should get all pending docs", (done) => {
      chai
        .request(baseUrl)
        .get(`/docs/pending`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.DOCS_FOUND.code);
          expect(res.body["message"]).to.equal(respCodes.DOCS_FOUND.message);
          expect(res.body).to.have.property("data");

          done();
        });
    });
  });

  describe("Read all approved docs", () => {
    it("Should get all approved docs", (done) => {
      chai
        .request(baseUrl)
        .get(`/docs/approved`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.DOCS_FOUND.code);
          expect(res.body["message"]).to.equal(respCodes.DOCS_FOUND.message);
          expect(res.body).to.have.property("data");

          done();
        });
    });
  });

  describe("Read all rejected docs", () => {
    it("Should get all rejected docs", (done) => {
      chai
        .request(baseUrl)
        .get(`/docs/rejected`)
        .end((err, res) => {
          if (err) {
            console.log(err);
            throw new Error("API Error");
          }
          expect(res.body["code"]).to.equal(respCodes.DOCS_FOUND.code);
          expect(res.body["message"]).to.equal(respCodes.DOCS_FOUND.message);
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
