import React from "react";
import { shallow } from "enzyme";
import * as services from "../services/OrgService";

test("renders learn react link", () => {
  expect("hello").toBe("hello");
});

test("createOrgTestCase", async () => {
  var ogInfo = {
    organisationName: "orgName5",
    email: "testEmail5@gmail.com",
    mobileNo: "1234567899",
    country: "INDIA",
    state: "TL",
    city: "HYD",
    membersCount: 10,
  };
  const response = await services.createOrgName(ogInfo);
  console.log(response);
  expect({
    returnCode: -1,
    message: "Organization name already exists.",
    statusCode: 40006,
  }).toStrictEqual(response);
});
