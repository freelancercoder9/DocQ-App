import * as services from "../services/UserServices";
export async function getUsersList(status) {
  const response = await services.get_Users(status);
  console.log("operation:", response);
  return response;
}
