import axios, { AxiosPromise } from "axios";
import { AuthRes, AuthReq } from "interfaces/auth";
export const loginApi = (
  param: AuthReq
): AxiosPromise<HttpResponse<AuthRes>> => {
  return axios({
    url: "https://dev-api.digiex.asia/calobye-be-dev/api/auth/login",
    method: "POST",
    data: param,
  });
};
