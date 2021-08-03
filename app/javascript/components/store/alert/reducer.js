import { alertTypes } from "./types";

const initialState = {
  open: false,
  message: '',
  anchorOrigin: { vertical: 'top', horizontal: 'center' },
  autoHideDuration: 3500,
};

export function alertReducer(state = initialState, action) {
  switch (action.type) {
    case alertTypes.SHOW_ALERT:
      return { ...state, open: true, ...action.payload };
    case alertTypes.CLEAR_ALERT:
      return { ...initialState };
    default:
      return state;
  }
};
