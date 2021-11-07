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
const signUpEndPoint = "/users";

describe("Get All users by org Id", () => {
  describe("Read all users", () => {
    it("Should get all users for the org Id 123 with pending status", (done) => {
      chai
        .request(baseUrl)
        .get(`/123/users/pending`)
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

  // describe("Read all users", () => {
  //   it("Should get all users for the org Id 123 with approved status", (done) => {
  //     chai
  //       .request(baseUrl)
  //       .get(`/123/users/approved`)
  //       .end((err, res) => {
  //         if (err) {
  //           console.log(err);
  //           throw new Error("API Error");
  //         }
  //         expect(res.body["code"]).to.equal(respCodes.USER_DETAILS_FOUND.code);
  //         expect(res.body["message"]).to.equal(
  //           respCodes.USER_DETAILS_FOUND.message
  //         );
  //         expect(res.body).to.have.property("data");

  //         done();
  //       });
  //   });
  // });

  // describe("Read all users", () => {
  //   it("Should get all users for the org Id 123 with rejected status", (done) => {
  //     chai
  //       .request(baseUrl)
  //       .get(`/123/users/rejected`)
  //       .end((err, res) => {
  //         if (err) {
  //           console.log(err);
  //           throw new Error("API Error");
  //         }
  //         expect(res.body["code"]).to.equal(respCodes.USER_DETAILS_FOUND.code);
  //         expect(res.body["message"]).to.equal(
  //           respCodes.USER_DETAILS_FOUND.message
  //         );
  //         expect(res.body).to.have.property("data");

  //         done();
  //       });
  //   });
  // });

  describe("Read all users for non-exist org Id", () => {
    it("Should throw organisation not found error. ", (done) => {
      chai
        .request(baseUrl)
        .get(`/123123/users/pending`)
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
