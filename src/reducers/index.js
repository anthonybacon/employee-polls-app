/**
 * reducers/index.js
 *
 * Define the combine reducers. Each reducer will manage just its own part of the state.
 *
 * Since the state manage questions, users and authedUser, reducers must be:
 * - questions reducer
 * - users reducer
 * - authedUser reducer
 * - loadingBar reducer (for UX purpose)
 *
 */

import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
