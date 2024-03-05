import axios from "./axios"


export const registerRequest = async (user) => axios.post(`/api/users/register`, user);

export const loginRequest = async (user) => axios.post(`/api/users/login`, user);

export const logoutRequest = async () => axios.post("/api/users/logout");

export const verifyTokenRequest = async () => axios.get(`/api/users/verify`);

export const forgotPasswordRequest = async () => axios.get(`/api/users/forgotPassword`);
