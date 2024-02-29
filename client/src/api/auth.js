import axios from "./axios"


export const registerRequest = async (user) => axios.post(`/users/register`, user);

export const loginRequest = async (user) => axios.post(`/users/login`, user);

export const logoutRequest = async () => axios.post("/users/logout");

export const verifyTokenRequest = async () => axios.post(`/users/verify-email`);

export const verifyRequest = async () => axios.post(`/users/verify`);

export const forgotPasswordRequest = async () => axios.get(`/users/forgotPassword`);
