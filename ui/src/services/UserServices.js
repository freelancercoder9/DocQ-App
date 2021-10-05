// import axios from "axios";
async function org_SignUp_Service(serviceData_signUp) {
  const returnResponse = {
    code: 0,
    message: "successfully created",
    data: {
      organisationName: "org_test",
      emailId: "abc123@gmail.com",
      mobileNo: "98980987",
      country: "India",
      state: "Telangana",
      city: "Hyderabad",
      membersCount: 1,
      organisationCode: "001",
    },
  };
  //   const returnResponse = await axios
  //     .post("http://192.168.18.3:7788/user/register", serviceData_signUp)
  //     .then((response) => {
  //       console.log("Success response : ", response);
  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.log("catch response : ", err);
  //       return err.response.data;
  //     });
  console.log("input data:", serviceData_signUp);
  console.log("res in service call :", returnResponse);
  return returnResponse;
}

async function user_SignUp_Service(serviceData_signUp) {
  const returnResponse = {
    code: 0,
    message: "string",
    data: {
      organisationId: 0,
      firstName: "string",
      lastName: "string",
      emailId: "string",
      mobileNo: "string",
      role: "string",
      status: "pending",
      userId: "string",
    },
  };
  console.log("input data:", serviceData_signUp);
  console.log("res in service call :", returnResponse);
  return returnResponse;
}
export { org_SignUp_Service, user_SignUp_Service };
