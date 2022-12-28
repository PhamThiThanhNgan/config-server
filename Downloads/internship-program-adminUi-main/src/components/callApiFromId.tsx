import axios from "axios";

export const callApiFromId = (url: any) => {
  const tokenAuth = localStorage.getItem("USER_INFO_KEY");
  if (typeof tokenAuth === "string") {
    return axios(url, {
      method: "GET",
      headers: {
        accept: " */*",
        "Auth-Token": JSON.parse(tokenAuth),
        "Content-Type": "application/json",
      },
    });
  }
};
