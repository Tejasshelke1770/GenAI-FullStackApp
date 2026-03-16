import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const registerUser = async ({ username, email, password }) => {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.get("/api/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.get("/api/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get("/api/auth/get-me");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
