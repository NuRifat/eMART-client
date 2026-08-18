import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://phi-mart-gamma.vercel.app/api/v1",
});

export default apiClient;