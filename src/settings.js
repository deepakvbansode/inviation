
import { chain } from "lodash";
const inviteService = `https://v2lmn90aj7.execute-api.us-east-2.amazonaws.com/develop/invitation`;

var API_ENDPOINTS = {
  getAllInvitations: `${inviteService}`,
  getInvite: `${inviteService}/{0}`,
  saveIntvite: `${inviteService}`,

  formatUrl: function(url) {
    var args = Array.prototype.slice.call(arguments, 1);
    return url.replace(/{(\d+)}/g, function(match, number) {
      return args[number] ? args[number] : match;
    });
  },

  setQueryParams: function(url, params) {
    if (params) {
      var queryParams = chain(params)
        .map((value, key) => {
          return key + "=" + encodeURIComponent(value);
        })
        .join("&")
        .value();
      if (url.indexOf("?") === -1) {
        return url + "?" + queryParams;
      } else {
        return url + "&" + queryParams;
      }
    } else {
      return url;
    }
  }
};

export default API_ENDPOINTS;
