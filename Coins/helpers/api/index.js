import axios from 'axios';
import { API_URL } from '../../config';

export function apiRequest(req) {
  const url       = API_URL + req.url;
  if (!req.headers) {
    req.headers = {};
  }
 
  req.headers['X-Requested-With'] = 'XMLHttpRequest';

  if (!req.params) {
    req.params = {};
  }
  if (!req.data) {
    req.data = {};
  }

  const axiosData = {
    method: req.method,
    url,
    headers: req.headers,
    params: req.params,
    data: req.data,
  };

  const axiosRequest = axios(axiosData);
  axiosRequest.catch((error) => {
      return axiosRequest;
  });
  return axiosRequest;
}
