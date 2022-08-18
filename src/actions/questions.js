/**
 * questions.js
 * 
 * Define all actions for the questions store slice
 *
 */

import { saveNewPoll, savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addUserQuestion, addUserQuestionAnswer, } from "../actions/users";

export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function retrieveQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswer(questionId, answer, authedUser) {
  return {
    type: ADD_ANSWER,
    questionId,
    answer,
    authedUser,
  };
}

// Update users and questions slice of the state
export function handleSaveQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveNewPoll({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

// Update users and questions slice of the state
export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    dispatch(addUserQuestionAnswer(qid, answer, authedUser));
    dispatch(addAnswer(qid, answer, authedUser));
    return savePollAnswer({
      qid,
      answer,
      authedUser,
    }).then(() => dispatch(hideLoading()));
  };
}
