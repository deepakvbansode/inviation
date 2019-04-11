import axios from "axios";
const RequestService = {
  fetch: (url, data) => {
    return RequestService.request("get", url, data);
  },

  save: (url, data) => {
    return RequestService.request("post", url, data);
  },

  update: (url, data) => {
    return RequestService.request("put", url, data);
  },

  request: (method, url, data, cancelToken) => {
    let headers = {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    };
    return axios({
      method,
      url,
      data,
      cancelToken,
      headers
    });
  }
};

export default RequestService;
