import appConstants from "../../constants/appConstants";
import { isString, chain, map, first } from "lodash";

export default class CookieStorage {
  static get(key) {
    if (!key || !isString(key)) {
      return;
    }

    var allCookies = document.cookie.split(";");
    var resultCookies = chain(allCookies)
      .map(function(cookie) {
        let split = map(cookie.split("="), function(data) {
          return decodeURIComponent(data).trim();
        });
        if (first(split) === key) {
          return JSON.parse(split[1] || "");
        }
        return false;
      })
      .compact()
      .value();

    return resultCookies.length ? first(resultCookies) : null;
  }

  static getDomainString() {
    return "domain=local.com";
  }

  static set(key, value, expTime, conversionType) {
    let expiryTime = CookieStorage.getExpiryTime(expTime, conversionType),
      keyString = key.toString(),
      valueString = JSON.stringify(value),
      //domain = CookieStorage.getDomainString(),
      cookie = `${keyString}=${valueString};${expiryTime};`;
    document.cookie = cookie;
  }

  static setDrfCookie(key, value) {
    let expiryTime = CookieStorage.getExpiryTime(),
      keyString = key.toString(),
      valueString = encodeURIComponent(JSON.stringify(value)),
      domain = CookieStorage.getDomainString(),
      cookie = `${keyString}=${valueString};${expiryTime};Path=/;${domain}`;
    document.cookie = cookie;
  }

  static removeItem(key) {
    if (!key) {
      return;
    }
    //setting previous time to expires will delete cookie.
    document.cookie = `${key}=;Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;${CookieStorage.getDomainString()}`;
  }

  static deleteAll() {
    var cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

      CookieStorage.removeItem(name);
    }
  }

  static getExpiryTime(expiryTime, conversionType) {
    let d = new Date();
    let hours = CookieStorage.getExpiryTimeInHours(expiryTime, conversionType);
    d.setTime(d.getTime() + hours);
    return `expires=${d.toUTCString()};`;
  }

  static getExpiryTimeInHours(expiryTime, conversionType) {
    let conversionTp = appConstants.conversionEnum[conversionType];
    if (expiryTime && (conversionTp && conversionTp.conversionConstant)) {
      return expiryTime * conversionTp.conversionConstant * 60 * 1000;
    } else {
      return appConstants.conversionEnum.HOURS.conversionConstant * 60 * 1000;
    }
  }
}
