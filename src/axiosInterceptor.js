import axios from 'axios';

import { toast } from 'react-toastify';
import { baseUrl, chekAdminAuth, getAdmin, getToken } from './Config.js';
// const express = require('express');
// var cors = require('cors');
// var app = express();
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   })
// );

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status === 501) {
    toast.error('Not Implemented.');
  } else if (error.response && error.response.status === 500) {
    // alert("There was an error on the server and the request could not be completed.")
    toast.error(error.response.data.error[0]);
  } else if (error.response && error.response.status === 502) {
    toast.error('Bad geteway');
  } else if (error.response && error.response.status === 503) {
    toast.error('The server is unavailable to handle this request right now');
  } else if (error.response && error.response.status === 521) {
    toast.error('Web server is down');
  } else if (error.response && error.response.status === 400) {
    toast.error('Server get bad request .');
  } else if (error.response && error.response.status === 403) {
    toast.error('Access to that resource is forbidden.');
  } else if (error.response && error.response.status === 404) {
    toast.error('The requested resource was not found.');
  } else if (error.response && error.response.status === 408) {
    toast.error('The server timed out waiting for the rest of the request from the browser.');
  } else if (error.response && error.response.status === 429) {
    toast.error('Too many requests at same time.');
  } else if (error.response && error.response.status === 401) {
    toast.error('Access Denied.');
  } else {
    toast.error('Somting went wrong');
  }
});
// axios.defaults.headers.common['auth-token'] = `Bearer ${getToken()}`;
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = `auth-token`;

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['auth-token'] = token;
      config.headers['Access-Control-Allow-Headers'] = 'Origin,auth-token,Access-Control-Allow-Headers,Access-Control-Allow-Origin';
      config.headers['Access-Control-Allow-Origin'] = '*';
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
