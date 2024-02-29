import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});

export const registerRequest = async (user) => axios.post(`/api/users/register`, user);

export const loginRequest = async (user) => axios.post(`/api/users/login`, user);

export const logoutRequest = async () => axios.post("api/users/logout");

export const verifyTokenRequest = async () => axios.post(`/api/users/verify-email`);

export const verifyRequest = async () => axios.post(`/api/users/verify`);

export const forgotPasswordRequest = async () => axios.get(`/api/users/forgotPassword`);
