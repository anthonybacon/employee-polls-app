/**
 * Unanswered.js
 *
 * Component that display the possibility to vote the poll
 * by choosing from two options
 *
 */

import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import NotFound from "./NotFound";

const Unanswered = (props) => {
  const [answerValue, setAnswerValue] = useState("");

  const { questions, dispatch, id } = props;
  const question = questions[id];

  // Display NotFound if question doesn't exist
  if (!question) {
    return <NotFound />;
  }

  const handleInputChange = (event) => {
    setAnswerValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddAnswer(id, answerValue));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: "80%", margin: "auto", paddingTop: "30px" }}
    >
      <Row>
        <Col>
          <Form.Check
            value="optionOne"
            type="radio"
            aria-label="radio 1"
            label={question.optionOne.text}
            name="pollAnswer"
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Check
            value="optionTwo"
            type="radio"
            aria-label="radio 2"
            label={question.optionTwo.text}
            name="pollAnswer"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Button
        style={{ marginTop: "30px" }}
        type="submit"
        variant="primary"
        disabled={answerValue === ""}
      >
        Vote now!
      </Button>
    </Form>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions,
  };
};
export default connect(mapStateToProps)(Unanswered);
