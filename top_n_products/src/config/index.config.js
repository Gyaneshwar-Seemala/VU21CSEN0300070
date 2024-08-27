import axios from "axios";

// Replace with the API URL you provided
const API_URL = "http://20.244.56.144/test/companies/";

const ApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  timeout: process.env.REACT_APP_REQUESTS_TIMEOUT,
});

// Interceptor for request configuration
ApiClient.interceptors.request.use(
  (config) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM5OTQxLCJpYXQiOjE3MjQ3Mzk2NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1ZjA4N2VmLWM4OWMtNGUxYy05MWVkLTk1ZTIxNWExMGVmMSIsInN1YiI6ImdzZWVtYWxhQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiIwNWYwODdlZi1jODljLTRlMWMtOTFlZC05NWUyMTVhMTBlZjEiLCJjbGllbnRTZWNyZXQiOiJZTWtHd2JhTVBtaEdxV2Z6Iiwib3duZXJOYW1lIjoiU2VlbWFsYSBHeWFuZXNod2FyIFJhbyIsIm93bmVyRW1haWwiOiJnc2VlbWFsYUBnaXRhbS5pbiIsInJvbGxObyI6IlZVMjFDU0VOMDMwMDA3MCJ9.1-4SCKzNQwoZev55p7-Y9ZDpCeUuhegwsBeM6rZJZa0"; // Replace with your actual Bearer token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default ApiClient;
