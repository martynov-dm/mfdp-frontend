import isProduction from "./isProduction";

const API_LOCAL_URL = "http://localhost:80/api";
const API_PROD_URL = "https://mfdp-api-martynov-dm.amvera.io/api";

const getApiUrl = () => {
  console.log("isProduction", isProduction);

  return isProduction ? API_PROD_URL : API_LOCAL_URL;
};

export default getApiUrl;
