/**
 * questions.js
 * questions reducer will determine how the questions part of the state changes
 *
 */

import {
  ADD_ANSWER,
  RETRIEVE_QUESTIONS,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_QUESTIONS: {
      return {
        ...state,
        ...action.questions,
      };
    }
    case ADD_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };
    case ADD_QUESTION: {
      return {
        ...state,
        [action.question.id]: action.question,
      };
    }
    default:
      return state;
  }
}
