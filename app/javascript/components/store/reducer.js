import { combineReducers } from "redux";

import { alertReducer } from './alert'
import { loginReducer } from "./login";
import { registerReducer } from "./register";
import { unitsReducer } from "./unit";
import { bottlesReducer } from "./bootle";
import { plansReducer } from "./plan";


const rootReducer = combineReducers({
  alert: alertReducer,
  login: loginReducer,
  register: registerReducer,
  unit: unitsReducer,
  bottle: bottlesReducer,
  plan: plansReducer
});

export default rootReducer;