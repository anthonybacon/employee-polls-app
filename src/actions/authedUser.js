/**
 * authedUser.js
 * Define all actions for the authedUser store slice
 *
 */

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setLoggedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
