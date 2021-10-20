import axios from "axios";

export async function create_User(serviceData_signUp) {
  const res = axios
    .post("http://localhost:7777/user/register", serviceData_signUp)
    .then((response) => {
      // console.log(`Response on Success : ${response.data}`);
      return {
        returnCode: 0,
        statusCode: response.data.code,
        message: response.data.message,
        data: response.data.data,
      };
    })
    .catch((error) => {
      return {
        returnCode: -1,
        statusCode: error.response.data.code,
        message: error.response.data.message,
      };
    });

  return res;
}
export async function delete_User(email_Id) {
  var newUrl = "http://localhost:7777/user/" + email_Id;
  const res = axios
    .delete(newUrl)
    .then((response) => {
      // console.log(`Response on delete : ${response.data}`);
      return {
        returnCode: 0,
        statusCode: response.data.code,
        message: response.data.message,
        data: response.data.data,
      };
    })
    .catch((error) => {
      return {
        returnCode: -1,
        statusCode: error.response.data.code,
        message: error.response.data.message,
      };
    });

  return res;
}

export async function get_User(email_Id) {
  var newUrl = "http://localhost:7777/user/" + email_Id;
  const res = axios
    .get(newUrl)
    .then((response) => {
      // console.log(`Response on get user : ${response.data}`);
      return {
        returnCode: 0,
        statusCode: response.data.code,
        message: response.data.message,
        data: response.data.data,
      };
    })
    .catch((error) => {
      return {
        returnCode: -1,
        statusCode: error.response.data.code,
        message: error.response.data.message,
      };
    });

  return res;
}

export async function get_Users(status) {
  var newUrl = "http://localhost:7777/users/" + status;
  const res = axios
    .get(newUrl)
    .then((response) => {
      // console.log(`Response on get user : ${response.data}`);
      return {
        returnCode: 0,
        statusCode: response.data.code,
        message: response.data.message,
        data: response.data.data,
      };
    })
    .catch((error) => {
      return {
        returnCode: -1,
        statusCode: error.response.data.code,
        message: error.response.data.message,
      };
    });

  return res;
}
