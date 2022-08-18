/**
 * shared.js
 *
 * Define all actions shared between store slices
 *
 */
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";
import { retrieveUsers } from "./users";
import { retrieveQuestions } from "./questions";

// Dispatch all initial data
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(retrieveUsers(users));
      dispatch(retrieveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

// Dispatch all initial data
export function handleTestInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(retrieveUsers(users));
      dispatch(retrieveQuestions(questions));
    });
  };
}
