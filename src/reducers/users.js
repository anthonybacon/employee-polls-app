/**
 * reducers/users.js
 *
 * users reducer will determine how the users part of the state changes
 *
 */

import {
  RETRIEVE_USERS,
  SAVE_USER_ANSWER,
  SAVE_QUESTION_ON_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_USERS: {
      return {
        ...state,
        ...action.users,
      };
    }
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    case SAVE_QUESTION_ON_USER: {
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    }
    default:
      return state;
  }
}
