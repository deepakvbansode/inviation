import appConstants from "../../constants/appConstants";
import CookieStorage from "./storageProvider";
export default class Authentication {
  static logout() {
    CookieStorage.deleteAll();
    document.location.reload();
  }

  static isAuthenticated() {
    return CookieStorage.get(appConstants.AUTH_COOKIE_KEY);
  }

  static setAuthToken(authToken) {
    CookieStorage.set(
      appConstants.AUTH_COOKIE_KEY,
      authToken,
      1,
      appConstants.conversionEnum.HOURS
    );
  }

  static getBetsSessionObj() {
    return CookieStorage.get(appConstants.AUTH_COOKIE_KEY) || {};
  }
}
