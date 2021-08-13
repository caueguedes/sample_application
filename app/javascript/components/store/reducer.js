import { combineReducers } from "redux";

import { alertReducer } from './alert'
import { loginReducer } from "./login";
import { registerReducer } from "./register";
import { unitsReducer } from "./unit";
import { bottlesReducer } from "./bootle";


const rootReducer = combineReducers({
  alert: alertReducer,
  login: loginReducer,
  register: registerReducer,
  unit: unitsReducer,
  bottle: bottlesReducer
});

export default rootReducer;