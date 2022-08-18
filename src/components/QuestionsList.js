/**
 * QuestionList.js
 *
 * Component that list all the questions for the logged user
 *
 */

import Question from "./Question";

const QuestionsList = ({ questions }) => {
  
  const questionsToShow = questions.length > 0 ? true : false;
  return (
    <div>
      {!questionsToShow ? (
        <div className="text-center">
          <p style={{ paddingTop: "30px" }}>No polls to show here!</p>
        </div>
      ) : (
        questions.map((question) => (
          <Question key={question.id} question={question} />
        ))
      )}
    </div>
  );
};

export default QuestionsList;
