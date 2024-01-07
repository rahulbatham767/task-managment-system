import axios from "axios";
const Api_Url = "http://localhost:8080/api/v1/user/";

export const getlogin = async (data) => {
  const res = await axios.post(Api_Url + "login", data);
  localStorage.setItem("token", res.data.authtoken);
  console.log(res);

  return res;
};
export const register = async (data) => {
  const res = await axios.post(Api_Url + "register", data);
  console.log(res);

  return res;
};

export const logOut = async () => {
  const res = await axios.get(Api_Url + "logout");
  console.log(res);
  return res;
};
