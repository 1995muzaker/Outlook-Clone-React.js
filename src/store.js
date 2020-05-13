import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import emailInfo from "./reducers/emailReducers";

// middlewares
const middleware = applyMiddleware(thunk);

// store
const store = createStore(emailInfo, middleware);
export default store;
