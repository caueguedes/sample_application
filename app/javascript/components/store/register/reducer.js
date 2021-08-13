import { registerTypes } from ".";

export function registerReducer(state =  {}, action) {
  switch (action.type) {
    case registerTypes.REGISTER_REQUEST:
      return { registering: true };
    case registerTypes.REGISTER_SUCCESS:
      return { };
    case registerTypes.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}