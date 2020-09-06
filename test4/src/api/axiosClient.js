// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config for the full list of configs
const axiosClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || 'https://js-post-api.herokuapp.com/api',
  headers: {
    'content-type': 'application/json',
    // 'x-access-tokent' :'nahojdpID[y820`0-`4-`4=`'
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
