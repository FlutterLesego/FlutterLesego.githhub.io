import axios from "axios";

const development = "http://localhost:8000/v1";
const production = "https://api.jamiidrive.co.za/v1";

const axiosInstance = axios.create({
  baseURL:
    ProcessingInstruction.env.NODE_ENV === "development"
      ? development
      : production,
  withCredentials: true,
});

export { axiosInstance };
