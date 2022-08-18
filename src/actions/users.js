/**
 * users.js
 *
 * Define all actions for the users store slice
 *
 */
export const RETRIEVE_USERS = "RETRIEVE_USERS";
export const SAVE_QUESTION_ON_USER = "SAVE_QUESTION_ON_USER";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

export function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
    type: SAVE_QUESTION_ON_USER,
    question,
  };
}

export function addUserQuestionAnswer(questionId, answer, authedUser) {
  return {
    type: SAVE_USER_ANSWER,
    questionId,
    answer,
    authedUser,
  };
}
