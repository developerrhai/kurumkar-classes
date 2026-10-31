import axios from "axios";

const api = axios.create({
  baseURL: "https://institute-api.rhaitech.online/kurumkarclasses/api" || "https://institute-api.rhaitech.online/kurumkarclasses/api", // backend url
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
