import axios from "axios";
const Api_Url = "http://localhost:8080/api/v1/task/";
const token = "rahul";

export const showtask = async () => {
  let auth = localStorage.getItem("token");

  try {
    const response = await axios.get(Api_Url + "show-task", {
      headers: {
        Authorization: `Bearer ${auth}`, // Assuming you're using a Bearer token
      },
    });

    // Process the response here

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching task:", error.message);
    throw error;
  }
};
export const addtask = async (data) => {
  let auth = localStorage.getItem("token");
  let res = await axios.post(Api_Url + "add-task", data, {
    headers: {
      Authorization: `Bearer ${auth}`, // Assuming you're using a Bearer token
      "Content-Type": "application/json", // Use "application/json" for JSON content
    },
  });
  return res;
};
export const updatetask = async (data) => {
  let auth = localStorage.getItem("token");
  const { _id } = data;
  console.log(data);

  let res = await axios.put(Api_Url + "update-task/" + _id, data, {
    headers: {
      Authorization: `Bearer ${auth}`, // Assuming you're using a Bearer token
      "Content-Type": "application/json", // Use "application/json" for JSON content
    },
  });
  return res;
};
export const deletetask = async (id) => {
  let auth = localStorage.getItem("token");
  let res = await axios.delete(Api_Url + "delete-task/" + id, {
    headers: {
      Authorization: `Bearer ${auth}`, // Assuming you're using a Bearer token
      "Content-Type": "application/json", // Use "application/json" for JSON content
    },
  });
  return res;
};
