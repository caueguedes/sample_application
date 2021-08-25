import { loginTypes } from './types';
import { authService } from '../../services';
import { alertActions } from '../alert';
import { history } from '../../utils';

import { getJwt, setJwt, removeJwt } from '../../utils/auth'
import routes from '../../config/routes.json'


function login(user, from = routes.HOME.path) {
  return async dispatch => {
    dispatch({type: loginTypes.LOGIN_REQUEST, user});

    try {
      let response = await authService.login(user);
      setJwt(JSON.stringify(response.data));

      dispatch({type: loginTypes.LOGIN_SUCCESS, user: response.data});
      history.push(from);

    } catch (error) {
      dispatch(
        alertActions.showAlert({message: error.message})
      );
      dispatch({type: loginTypes.LOGIN_FAILURE, error});
    }
  };
}

function logout() {
  try {
    let token = getJwt().access_token;
    authService.logout(token);
  }catch (error) {
    console.log(`Error on logout: ${error}`)
  } finally {
    removeJwt();
    return {type: loginTypes.LOGOUT};
  }
}

export const loginActions = {
  login,
  logout
};