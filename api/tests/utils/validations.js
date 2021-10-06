// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const chai = require("chai");
const expect = chai.expect;
const validations = require("../../utils/validations");
const commonErrorCodes = require("../../responses/commonErrorCodes");

describe("Utils test cases", function () {
  describe("validate password encrypt and decrypt ", function () {
    it("should return success when passed input and ecrypted are same", async function () {
      const encryptPassword = await validations.hashPassword("username");
      const result = await validations.validatePassword(
        "username",
        encryptPassword
      );
      expect(result).to.equal(true);
    });
    it("should return error when passed input and ecrypted are different", async function () {
      const encryptPassword = await validations.hashPassword("username");
      const result = await validations.validatePassword(
        "username1",
        encryptPassword
      );
      expect(result).to.equal(false);
    });
  });

  describe("validate Organization name", function () {
    it("should return success when passed Organization name", function () {
      const result = validations.validateOrgName("chandu");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing Organization name", function () {
      const result = validations.validateOrgName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_ORG_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_ORG_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_ORG_NAME.message
      );
    });

    it("should return lenght error when Organization name length is < 4", function () {
      const result = validations.validateOrgName("org");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.message
      );
    });
    it("should return lenght error when Organization name length is > 64", function () {
      const result = validations.validateOrgName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_ORG_NAME_LENGTH.message
      );
    });

    it("should return invalid organization name when passed numeric", function () {
      const result = validations.validateOrgName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ORG_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ORG_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_ORG_NAME.message
      );
    });
    it("should return invalid organization name when passed JSON", function () {
      const result = validations.validateOrgName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ORG_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ORG_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_ORG_NAME.message
      );
    });
    it("should return invalid organization name when passed array", function () {
      const result = validations.validateOrgName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ORG_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ORG_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_ORG_NAME.message
      );
    });
  });
  describe("validate state name", function () {
    it("should return success when passed state name", function () {
      const result = validations.validateStateName("Andhra");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing state name", function () {
      const result = validations.validateStateName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_STATE_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_STATE_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_STATE_NAME.message
      );
    });

    it("should return lenght error when state name length is < 2", function () {
      const result = validations.validateStateName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.message
      );
    });
    it("should return lenght error when state name length is > 64", function () {
      const result = validations.validateStateName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_STATE_NAME_LENGTH.message
      );
    });

    it("should return invalid state name when passed numeric", function () {
      const result = validations.validateStateName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_STATE_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.message
      );
    });
    it("should return invalid state name when passed JSON", function () {
      const result = validations.validateStateName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_STATE_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.message
      );
    });
    it("should return invalid state name when passed array", function () {
      const result = validations.validateStateName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_STATE_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_STATE_NAME.message
      );
    });
  });
  describe("validate city name", function () {
    it("should return success when passed city name", function () {
      const result = validations.validateCityName("Guntur");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing city name", function () {
      const result = validations.validateCityName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_CITY_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_CITY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_CITY_NAME.message
      );
    });

    it("should return lenght error when city name length is < 2", function () {
      const result = validations.validateCityName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.message
      );
    });
    it("should return lenght error when city name length is > 64", function () {
      const result = validations.validateCityName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_CITY_NAME_LENGTH.message
      );
    });

    it("should return invalid city name when passed numeric", function () {
      const result = validations.validateCityName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_CITY_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_CITY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_CITY_NAME.message
      );
    });
    it("should return invalid city name when passed JSON", function () {
      const result = validations.validateCityName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_CITY_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_CITY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_CITY_NAME.message
      );
    });
    it("should return invalid city name when passed array", function () {
      const result = validations.validateCityName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_CITY_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_CITY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_CITY_NAME.message
      );
    });
  });
  describe("validate country name", function () {
    it("should return success when passed city name", function () {
      const result = validations.validateCountryName("India");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing country name", function () {
      const result = validations.validateCountryName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_COUNTRY_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_COUNTRY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_COUNTRY_NAME.message
      );
    });

    it("should return lenght error when country name length is < 2", function () {
      const result = validations.validateCountryName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.message
      );
    });
    it("should return lenght error when country name length is > 64", function () {
      const result = validations.validateCountryName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME_LENGTH.message
      );
    });

    it("should return invalid country name when passed numeric", function () {
      const result = validations.validateCountryName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_COUNTRY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.message
      );
    });
    it("should return invalid country name when passed JSON", function () {
      const result = validations.validateCountryName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_COUNTRY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.message
      );
    });
    it("should return invalid country name when passed array", function () {
      const result = validations.validateCountryName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_COUNTRY_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_COUNTRY_NAME.message
      );
    });
  });

  describe("validate first name", function () {
    it("should return success when passed first name", function () {
      const result = validations.validateFirstName("first name");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing first name", function () {
      const result = validations.validateFirstName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_FIRST_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_FIRST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_FIRST_NAME.message
      );
    });

    it("should return lenght error when first name length is < 2", function () {
      const result = validations.validateFirstName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.message
      );
    });
    it("should return lenght error when first name length is > 64", function () {
      const result = validations.validateFirstName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME_LENGTH.message
      );
    });

    it("should return invalid first name when passed numeric", function () {
      const result = validations.validateFirstName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_FIRST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.message
      );
    });
    it("should return invalid first name when passed JSON", function () {
      const result = validations.validateFirstName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_FIRST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.message
      );
    });
    it("should return invalid first name when passed array", function () {
      const result = validations.validateFirstName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_FIRST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_FIRST_NAME.message
      );
    });
  });

  describe("validate last name", function () {
    it("should return success when passed last name", function () {
      const result = validations.validateLastName("last name");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing last name", function () {
      const result = validations.validateLastName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_LAST_NAME.message
      );
    });

    it("should return lenght error when last name length is < 2", function () {
      const result = validations.validateLastName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.message
      );
    });
    it("should return lenght error when last name lenght is > 64", function () {
      const result = validations.validateLastName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.message
      );
    });

    it("should return invalid last name when passed numeric", function () {
      const result = validations.validateLastName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
    it("should return invalid last name when passed JSON", function () {
      const result = validations.validateLastName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
    it("should return invalid last name when passed array", function () {
      const result = validations.validateLastName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
  });

  describe("validate username", function () {
    it("should return success when passed username", function () {
      const result = validations.validateUserName("username");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing username", function () {
      const result = validations.validateUserName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_USERNAME.message
      );
    });

    it("should return lenght error when username lenght is < 6", function () {
      const result = validations.validateUserName("user");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.message
      );
    });
    it("should return lenght error when username lenght is > 32", function () {
      const result = validations.validateUserName(
        "1234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME_LENGTH.message
      );
    });

    it("should return invalid username when passed numeric", function () {
      const result = validations.validateUserName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
    it("should return invalid username when passed JSON", function () {
      const result = validations.validateUserName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
    it("should return invalid username when passed array", function () {
      const result = validations.validateUserName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_USERNAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_USERNAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USERNAME.message
      );
    });
  });

  describe("validate password format", function () {
    it("should return success when passed valid password", function () {
      const result = validations.validatePasswordFormat("password");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing password", function () {
      const result = validations.validatePasswordFormat();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_PASSWORD.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_PASSWORD.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_PASSWORD.message
      );
    });
    it("should return lenght error when password lenght is < 6", function () {
      const result = validations.validatePasswordFormat("1234");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.message
      );
    });
    it("should return lenght error when password lenght is > 32", function () {
      const result = validations.validatePasswordFormat(
        "1234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_PASSWORD_LENGTH.message
      );
    });
    it("should return invalid password format when passed JSON", function () {
      const result = validations.validatePasswordFormat({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.message
      );
    });
    it("should return invalid password format when passed array", function () {
      const result = validations.validatePasswordFormat([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_PASSWORD_FORMAT.message
      );
    });
  });
  describe("validate email", function () {
    it("should return success when passed email", function () {
      const result = validations.validateEmail("chanduthedev@gmail.com");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing email", function () {
      const result = validations.validateEmail();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.MISSING_EMAIL.message);
    });
    it("should return invalid email when passed numeric", function () {
      const result = validations.validateEmail(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
    it("should return invalid email when passed JSON", function () {
      const result = validations.validateEmail({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
    it("should return invalid email when passed array", function () {
      const result = validations.validateEmail([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_EMAIL.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_EMAIL.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_EMAIL.message);
    });
  });

  describe("validate Role", function () {
    it("should return success when passed Role as admin", function () {
      const result = validations.validateRole("admin");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });

    it("should return success when passed Role as staff", function () {
      const result = validations.validateRole("staff");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing role", function () {
      const result = validations.validateRole();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_ROLE.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_ROLE.code);
      expect(result.message).to.equal(commonErrorCodes.MISSING_ROLE.message);
    });

    it("should return invalid role when undefined role passed", function () {
      const result = validations.validateRole("user");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ROLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ROLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_ROLE.message);
    });

    it("should return invalid role when passed numeric", function () {
      const result = validations.validateRole(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ROLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ROLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_ROLE.message);
    });

    it("should return invalid role when passed JSON", function () {
      const result = validations.validateRole({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ROLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ROLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_ROLE.message);
    });
    it("should return invalid role when passed array", function () {
      const result = validations.validateRole([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_ROLE.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_ROLE.code);
      expect(result.message).to.equal(commonErrorCodes.INVALID_ROLE.message);
    });
  });

  describe("validate user status", function () {
    it("should return success when passed status as approved", function () {
      const result = validations.validateUserStatus("approved");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });

    it("should return success when passed status as pending", function () {
      const result = validations.validateUserStatus("pending");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });

    it("should return success when passed status as rejected", function () {
      const result = validations.validateUserStatus("rejected");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });

    it("should return missing user status", function () {
      const result = validations.validateUserStatus();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.MISSING_USER_STATUS.status
      );
      expect(result.code).to.equal(commonErrorCodes.MISSING_USER_STATUS.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_USER_STATUS.message
      );
    });

    it("should return invalid role when undefined user status passed", function () {
      const result = validations.validateUserStatus("review");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_USER_STATUS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.message
      );
    });

    it("should return invalid user status when passed numeric", function () {
      const result = validations.validateUserStatus(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_USER_STATUS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.message
      );
    });

    it("should return invalid user status when passed JSON", function () {
      const result = validations.validateUserStatus({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_USER_STATUS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.message
      );
    });
    it("should return invalid user status when passed array", function () {
      const result = validations.validateUserStatus([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.status
      );
      expect(result.code).to.equal(commonErrorCodes.INVALID_USER_STATUS.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_USER_STATUS.message
      );
    });
  });

  describe("validate last name", function () {
    it("should return success when passed last name", function () {
      const result = validations.validateLastName("last name");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.SUCCESS.status);
      expect(result.code).to.equal(commonErrorCodes.SUCCESS.code);
      expect(result.message).to.equal(commonErrorCodes.SUCCESS.message);
    });
    it("should return missing last name", function () {
      const result = validations.validateLastName();
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.MISSING_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.MISSING_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.MISSING_LAST_NAME.message
      );
    });

    it("should return lenght error when last name length is < 2", function () {
      const result = validations.validateLastName("u");
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.message
      );
    });
    it("should return lenght error when last name lenght is > 64", function () {
      const result = validations.validateLastName(
        "123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
      );
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.status
      );
      expect(result.code).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.code
      );
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME_LENGTH.message
      );
    });

    it("should return invalid last name when passed numeric", function () {
      const result = validations.validateLastName(20);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
    it("should return invalid last name when passed JSON", function () {
      const result = validations.validateLastName({ test: "test" });
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
    it("should return invalid last name when passed array", function () {
      const result = validations.validateLastName([1, 2]);
      expect(result).to.be.an("object");
      expect(result).to.have.property("status");
      expect(result).to.have.property("code");
      expect(result).to.have.property("message");
      expect(result.status).to.equal(commonErrorCodes.INVALID_LAST_NAME.status);
      expect(result.code).to.equal(commonErrorCodes.INVALID_LAST_NAME.code);
      expect(result.message).to.equal(
        commonErrorCodes.INVALID_LAST_NAME.message
      );
    });
  });
});
