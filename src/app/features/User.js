import axios from "axios";
const Api_Url = "https://task-managment-backend.vercel.app/api/v1/user/";

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
