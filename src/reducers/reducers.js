import { combineReducers } from "redux";
import { emailInfo } from "./emailReducers";

// combine reducers

const reducers = combineReducers({
  emailInfo: emailInfo,
});

export default reducers;
