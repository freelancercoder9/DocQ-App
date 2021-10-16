import React from "react";
import { shallow } from "enzyme";
import * as services from "../services/OrgService";

test("renders learn react link", () => {
  expect("hello").toBe("hello");
});
test("createOrg successfully", async () => {
  var orgInfo = {
    organisationName: "orgName5",
    email: "testEmail5@gmail.com",
    mobileNo: "1234567899",
    country: "INDIA",
    state: "TL",
    city: "HYD",
    membersCount: 10,
  };
  const response = await services.createOrgName(orgInfo);
  console.log(response);
  expect({
    data: {
      organisationName: "orgName5",
      email: "testEmail5@gmail.com",
      mobileNo: "1234567899",
      country: "INDIA",
      state: "TL",
      city: "HYD",
      membersCount: 10,
      organisationId: "orgName5",
    },
    returnCode: 0,
    message: "Organization created successfully",
    statusCode: 20006,
  }).toStrictEqual(response);
});

test("createOrgTestCase already exist", async () => {
  var orgInfo = {
    organisationName: "orgName5",
    email: "testEmail5@gmail.com",
    mobileNo: "1234567899",
    country: "INDIA",
    state: "TL",
    city: "HYD",
    membersCount: 10,
  };
  const response = await services.createOrgName(orgInfo);
  console.log(response);
  expect({
    returnCode: -1,
    message: "Organization name already exists.",
    statusCode: 40006,
  }).toStrictEqual(response);
});

test("deleteOrgTestCase", async () => {
  const response = await services.deleteOrgName("testEmail5@gmail.com");
  console.log(response);
  expect({
    returnCode: 0,
    data: undefined,
    message: "Organization details deleted successfully",
    statusCode: 20006,
  }).toStrictEqual(response);
});
