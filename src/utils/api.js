import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

// Return the list of all users and questions in order to display
// initial data in the UI
export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

// Save new pool
export function saveNewPoll(info) {
  return _saveQuestion(info);
}

// Save pool answer
export function savePollAnswer(info) {
  return _saveQuestionAnswer(info);
}
