// _DATA.test.js
var data = require("../utils/_DATA");

describe("data", () => {
  it("Check correctly fomatted question", async () => {
    var questionToSave = {
      optionOneText: "Mock optionOne",
      optionTwoText: "Mock optionTwo",
      author: "mockUser",
    };

    const objectExpected = {
      author: "mockUser",
      optionOne: {
        text: "Mock optionOne",
        votes: [],
      },
      optionTwo: {
        text: "Mock optionTwo",
        votes: [],
      },
    };

    await expect(data._saveQuestion(questionToSave)).resolves.toEqual(
      expect.objectContaining(objectExpected)
    );
  });

  it("Check not fomatted question (missing author) raise an error", async () => {
    var questionToSave = {
      optionOneText: "Mock optionOne",
      optionTwoText: "Mock optionTwo",
    };
    await expect(data._saveQuestion(questionToSave)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("Check correctly fomatted answer", async () => {
    var answerToSave = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionTwo",
    };
    await expect(data._saveQuestionAnswer(answerToSave)).resolves.toEqual(true);
  });

  it("Check not fomatted answer (missing answer) raise an error", async () => {
    var answerToSave = {
      authedUser: "sarahedo",
      qid: "xj352vofupe1dqz9emx13r",
    };
    await expect(data._saveQuestionAnswer(answerToSave)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
