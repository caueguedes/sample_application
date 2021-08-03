const TOKEN_KEY = 'user';


export const getJwt = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY));
};

export const setJwt = (user) => {
  localStorage.setItem(TOKEN_KEY, user);
};

export const removeJwt = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
  if (getJwt()) {
    return true;
  }
  return false;
};

export const authHeader = () => {
  let user = getJwt();

  if (user && user.access_token) {
    return {'Authorization': `${user.token_type} ${user.access_token}`};
  }
  return {};
}

