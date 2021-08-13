import { registerTypes } from '.';
import { registerService } from "../../services";
import { history } from '../../utils';
import { alertActions } from "../alert";

import routes from '../../config/routes.json'

function register(user){
  return async dispatch => {
    dispatch({ type: registerTypes.REGISTER_REQUEST, user });

    try {
      await registerService.register(user);

      history.push(routes.LOGIN.path);
      dispatch(
        alertActions.showAlert({message: "Account created"})
      );

      dispatch({ type: registerTypes.REGISTER_SUCCESS, user });

    } catch (error) {
      dispatch(
        alertActions.showAlert({message: error.response.data.error.join(', ')})
      );

      dispatch({ type: registerTypes.REGISTER_FAILURE, error })
    }
  };
}

export const registerActions = {
  register,
};
