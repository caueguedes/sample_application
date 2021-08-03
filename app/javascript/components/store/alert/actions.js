import { alertTypes } from './types';

const showAlert = (msg = {message: 'Success'}) => ({
  type: alertTypes.SHOW_ALERT,
  payload: { ...msg }
});

const clearAlert = () => ({
  type: alertTypes.CLEAR_ALERT,
});

export const alertActions = {
  showAlert,
  clearAlert
};