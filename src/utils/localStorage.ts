export const setLocalStorage = (key: string, value: string | {}) => {
  return localStorage 
  ? localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  : null;
};

export const getLocalStorage = (key: string) => {
  const value = localStorage
    ? localStorage.getItem(key)
    : null;
  
  try {
    if (value === null) return null;

    return JSON.parse(value);
  }
  catch (e) {
    return value;
  }
}

export const removeLocalStorage = (key: string) => {
  return localStorage
    ? localStorage.removeItem(key)
    : null;
}