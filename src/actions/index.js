import movies from "../apis/movies";
import history from "../history";
import {
  CREATE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SIGN_IN,
  SIGN_OUT,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createMovie = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await movies.post("/movies", { ...formValues, userId });

  dispatch({ type: CREATE_MOVIE, payload: response.data });
  history.push("/");
};

export const fetchMovies = () => async (dispatch) => {
  const response = await movies.get("/movies");

  dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await movies.get(`/movies/${id}`);

  dispatch({ type: FETCH_MOVIE, payload: response.data });
};

export const editMovie = (id, formValues) => async (dispatch) => {
  const response = await movies.put(`/movies/${id}`, formValues);

  dispatch({ type: EDIT_MOVIE, payload: response.data });
};

export const deleteMovie = (id) => async (dispatch) => {
  await movies.delete(`/movies/${id}`);

  dispatch({ type: DELETE_MOVIE, payload: id });
};
