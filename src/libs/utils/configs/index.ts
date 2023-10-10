const API_URL = `${import.meta.env.VITE_BASE_URL}/api/` as string;
const API_URL_LOCAL = `${import.meta.env.VITE_BASE_URL_LOCAL}/api/` as string;
const APP_ENVIRONMENT = `${import.meta.env.VITE_APP_ENVIRONMENT}` as string;
export default {
  API_URL,
  API_URL_LOCAL,
  APP_ENVIRONMENT,
};
