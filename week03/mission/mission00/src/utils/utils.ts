export const getCurrentPath = (): string => {
  return window.location.pathname;
};

export const navigateTo = (path: string): void => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};