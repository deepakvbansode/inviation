export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function isIos() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function isCriOs() {
  return navigator.userAgent.match("CriOS");
}

export function isAndroid() {
  return /(android)/i.test(navigator.userAgent);
}

