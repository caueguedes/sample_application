import { combineReducers } from "redux";

import { alertReducer } from './alert'
import { registerReducer } from "./register/reducer";
import { loginReducer } from "./login";


const rootReducer = combineReducers({
  register: registerReducer,
  alert: alertReducer,
  login: loginReducer
});

export default rootReducer;