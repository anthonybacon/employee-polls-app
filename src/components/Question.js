/**
 * Question.js
 *
 * Component that display each question in the QuestionList
 * and redirect to the question page (QuestionDetail component)
 * in order to view the result (if the question is already answered by the user)
 * or answered the question
 *
 */

import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserAvatar from "./UserAvatar";

const Question = ({ question, userQuestion, userAnswersIds }) => {
  const handleAnswered = (id) => {
    return userAnswersIds.includes(id);
  };
  return (
    <Card className="text-center" style={{ marginTop: "30px" }}>
      <Card.Header>
        <UserAvatar user={userQuestion} />
        {userQuestion.name}
      </Card.Header>
      <Card.Body>
        <Card.Title>Would You Rather?</Card.Title>
        <Card.Text>{question.optionOne.text} or ...</Card.Text>
        <Link to={`/questions/${question.id}`}>
          <Button variant={handleAnswered(question.id) ? "success" : "warning"}>
            {handleAnswered(question.id) ? "View Results" : "Answer!"}
          </Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted" style={{ fontSize: "12px" }}>
        {formatDate(question.timestamp)}
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ users, authedUser }, { question }) => {
  const userQuestion = users[question.author];
  const answeredQuestion = userQuestion.answers;
  const userAnswersIds = Object.keys(users[authedUser].answers);
  return {
    userAnswersIds,
    userQuestion,
    answeredQuestion,
  };
};
export default connect(mapStateToProps)(Question);
