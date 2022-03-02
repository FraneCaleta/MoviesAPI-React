import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  movies: movieReducer,
});
