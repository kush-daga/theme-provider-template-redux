import { combineReducers } from "redux";
import app from "./app/reducer";
import auth from "./auth/reducer";
import error from "./errors/reducer";
const rootReducer = combineReducers({
  app,
  auth,
  error,
});
export default rootReducer;
