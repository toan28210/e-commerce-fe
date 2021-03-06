
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODcxYTU2ZmVjYzllMDI2OTc2ZWE2MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTM5ODAyODIsImV4cCI6MTY1NDIzOTQ4Mn0.jn0DJLjO3A0_7eU_TiaoBA-sxPkTeP79aRLdtuZVapQ"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});