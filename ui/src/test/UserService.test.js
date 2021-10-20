import React from "react";
import { shallow } from "enzyme";
import * as services from "../services/UserServices";

test("sample", async () => {
  expect("hello").toBe("hello");
});

test("user register success", async () => {
  var user_Info = {
    organisationId: 123,
    firstName: "test@12345",
    lastName: "abc@12345",
    email: "test@gmail.com",
    mobileNo: "9237882257",
    role: "admin",
    password: "abc123",
    username: "testuser1234",
  };
  const response = await services.create_User(user_Info);
  // console.log(response);
  expect({
    data: {
      organisationId: 123,
      firstName: "test@12345",
      lastName: "abc@12345",
      status: "pending",
      mobileNo: "9237882257",
      role: "admin",
    },
    returnCode: 0,
    message: "User Created successfully",
    statusCode: 20001,
  }).toStrictEqual(response);
});

test("user register already exist", async () => {
  var user_Info = {
    organisationId: 123,
    firstName: "test@12345",
    lastName: "abc@12345",
    email: "test@gmail.com",
    mobileNo: "9237882257",
    role: "admin",
    password: "abc123",
    username: "testuser1234",
  };
  const response = await services.create_User(user_Info);
  // console.log(response);
  expect({
    returnCode: -1,
    message: "User already exists with this username or email",
    statusCode: 40001,
  }).toStrictEqual(response);
});

test("get user", async () => {
  const response = await services.get_User("test@gmail.com");
  // console.log(response);
  expect({
    returnCode: 0,
    data: {
      firstName: "test@12345",
      lastName: "abc@12345",
      mobileNo: "9237882257",
      role: "admin",
      status: "pending",
      createdTimestamp: "2021-10-20T06:11:10.916Z",
      organisationId: 123,
    },
    message: "User Details found.",
    statusCode: 20005,
  }).toStrictEqual(response);
});

test("user delete", async () => {
  const response = await services.delete_User("test@gmail.com");
  // console.log(response);
  expect({
    returnCode: 0,
    data: undefined,
    message: "User deleted successfully",
    statusCode: 20002,
  }).toStrictEqual(response);
});

test("get users", async () => {
  const response = await services.get_Users("pending");
  // console.log(response);
  expect({
    returnCode: 0,
    data: [
      {
        _id: "616fc45ff1c715a626db7c27",
        organisation_id: 1234,
        first_name: "test1@12345",
        last_name: "abc1@12345",
        mobile_no: "9237882257",
        email: "test1@gmail.com",
        password:
          "$2b$10$TM1dVIKPHCbKv862Fx6iYuEbrurWkEWhIwgVHUd2KoS8xOfYQ/Pn.",
        role: "admin",
        status: "pending",
        created_timestamp: "2021-10-20T07:25:19.348Z",
        __v: 0,
      },
      {
        _id: "616fc485f1c715a626db7c2c",
        organisation_id: 12345,
        first_name: "test12@12345",
        last_name: "abc12@12345",
        mobile_no: "9237882257",
        email: "test12@gmail.com",
        password:
          "$2b$10$8mc1c5w3ZmneVeqrTT3NGOAAi8cZ7huS7S23D6GV9aEkfdFSuzhl6",
        role: "admin",
        status: "pending",
        created_timestamp: "2021-10-20T07:25:57.241Z",
        __v: 0,
      },
      {
        _id: "616fc499f1c715a626db7c2f",
        organisation_id: 345,
        first_name: "test123@12345",
        last_name: "abc123@12345",
        mobile_no: "9237882257",
        email: "test123@gmail.com",
        password:
          "$2b$10$CUByVTxC3oX/pY3b/dSOvuBZnLkS.5AW4m3wBr9OhgZZdTH1s..EO",
        role: "admin",
        status: "pending",
        created_timestamp: "2021-10-20T07:26:17.015Z",
        __v: 0,
      },
    ],
    message: "User Details found.",
    statusCode: 20005,
  }).toStrictEqual(response);
});
