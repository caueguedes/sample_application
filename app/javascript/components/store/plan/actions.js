import { planTypes } from '.';
import { resourceService } from "../../services";
import { alertActions } from "../alert";
import { deserializer } from '../../utils';

function loadPlans(){
  return async dispatch => {
    dispatch({ type: planTypes.PLANS_REQUEST });
    try {
      let response = await resourceService.getPlans();
      let deserializedResponse = await new deserializer().deserialize(response.data)

      dispatch({
        type: planTypes.PLANS_SUCCESS,
        plan: deserializedResponse
      });

    } catch (error) {
      dispatch(alertActions.showAlert({
        message: "Couldn't load resource, try again later."
      }));

      dispatch({ type: planTypes.PLANS_FAILURE, error })
    }
  };
}

export const plansActions = {
  loadPlans,
};
