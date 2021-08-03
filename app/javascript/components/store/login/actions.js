import { loginTypes } from './types';
import { authService } from '../../services';
import { alertActions } from '../alert';
import { history } from '../../utils';

import { getJwt, setJwt, removeJwt } from '../../utils/auth'


function login(user, from = '/') {
  return async dispatch => {
    dispatch({type: loginTypes.LOGIN_REQUEST, user});

    try {
      let response = await authService.login(user);
      setJwt(JSON.stringify(response.data));

      dispatch({type: loginTypes.LOGIN_SUCCESS, user: response.data});
      history.push(from);

    } catch (error) {
      dispatch(
        alertActions.showAlert({message: error.response.data.error.join(', ')})
      );
      dispatch({type: loginTypes.LOGIN_FAILURE, error});
    }
  };
}

async function logout() {
  try {
    let token = getJwt().access_token;
    await authService.logout(token);

  }catch (error) {
    console.log(`Error on logout: ${error}`)

  } finally {
    removeJwt();
    return { type: loginTypes.LOGOUT };
  }
}

export const loginActions = {
  login,
  logout
};