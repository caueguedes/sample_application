import { bottleTypes } from '.';
import { resourceService } from "../../services";
import { alertActions } from "../alert";
import { deserializer } from '../../utils';

function loadBottles(page){
  return async dispatch => {
    dispatch({ type: bottleTypes.BOTTLES_REQUEST });
    try {
      let response = await resourceService.getBottles(page);
      let deserializedResponse = await new deserializer().deserialize(response.data)
      let total_pages = response.data.meta?.total_pages;

      dispatch({
        type: bottleTypes.BOTTLES_SUCCESS,
        bottle: deserializedResponse,
        total_pages: total_pages
      });

    } catch (error) {
      dispatch(alertActions.showAlert({
        message: "Couldn't load resource, try again later."
      }));

      dispatch({ type: bottleTypes.BOTTLES_FAILURE, error })
    }
  };
}

export const bottleActions = {
  loadBottles,
};
