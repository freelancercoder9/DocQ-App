import axios from "axios";

export async function createOrgName(orgCreateData) {
  console.log(`In request of create Org ${orgCreateData}`);
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
      console.log(`Response on Error : ${error}`);
      console.log(error.response.data);
      return {
        returnCode: -1,
        statusCode: error.response.data.code,
        message: error.response.data.message,
      };
    });

  return res;
}
