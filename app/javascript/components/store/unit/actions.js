import { unitTypes } from '.';
import { resourceService } from "../../services";
import { alertActions } from "../alert";
import { deserializer } from '../../utils';

function loadUnits(){
  return async dispatch => {
    dispatch({ type: unitTypes.UNITS_REQUEST });
    try {
      let response = await resourceService.getUnits();
      let deserializedResponse = await new deserializer().deserialize(response.data)

      dispatch({
        type: unitTypes.UNITS_SUCCESS,
        unit: deserializedResponse
      });

    } catch (error) {
      dispatch(alertActions.showAlert({
        message: "Couldn't load resource, try again later."
      }));

      dispatch({ type: unitTypes.UNITS_FAILURE, error })
    }
  };
}

export const unitsActions = {
  loadUnits,
};
