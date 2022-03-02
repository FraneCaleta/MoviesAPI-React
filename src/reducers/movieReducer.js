import _ from "lodash";
import {
  CREATE_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
