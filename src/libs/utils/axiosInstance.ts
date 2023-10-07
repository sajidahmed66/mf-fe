import configs from "@/libs/utils/configs";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: configs.API_URL_LOCAL,
});
