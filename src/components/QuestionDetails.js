/**
 * QuestionDetail.js
 * 
 * Wrapper component that determines which component must 
 * be rendered considering the current question:
 * - for answered question, render the Answered component;
 * - for unanswered question, render the Unanswered component;
 * 
 */

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import Card from "react-bootstrap/Card";
import UserAvatar from "./UserAvatar";
import NotFound from "./NotFound";

const QuestionDetail = (props) => {
  const params = useParams();
  const { question_id } = params;
  const { authedUserAnswers, questions, users } = props;

  // view if we have an unanswered question or not.
  // display different UI
  const answered = authedUserAnswers.includes(question_id) ? true : false;
  const question = questions[question_id];
  
  // Display NotFound if question doesn't exist
  if (!question) {
    return <NotFound />
  }

  const { author } = question;
  const authorDetails = users[author];

  return (
    <Card className="text-center" style={{ marginTop: "30px" }}>
      <Card.Header>
        <UserAvatar user={authorDetails} /> Poll by {author}
      </Card.Header>
      {answered ? (
        <Card.Body>
          <Card.Title>Would You Rather?</Card.Title>
          <Answered id={question_id} />
        </Card.Body>
      ) : (
        <Card.Body>
          <Card.Title>Would You Rather?</Card.Title>
          <Unanswered id={question_id} />
        </Card.Body>
      )}
    </Card>
  );
};

const mapStateToProps = ({ users, authedUser, questions }) => {
  const authedUserAnswers = Object.keys(users[authedUser].answers);

  return {
    authedUserAnswers,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(QuestionDetail);
