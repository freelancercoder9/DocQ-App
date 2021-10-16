import axios from "axios";

export async function createOrgName(orgCreateData) {
  const res = axios
    .post("http://192.168.18.3:7777/org/register", orgCreateData)
    .then((response) => {
      console.log(`Response on Success : ${response.data}`);
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
export async function deleteOrgName(orgName) {
  var newUrl = "http://192.168.18.3:7777/org/" + orgName;
  const res = axios
    .delete(newUrl)
    .then((response) => {
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
