/**
 * NewPoll.js
 *
 * Component that allows to the logged user to insert a new poll.
 *
 */

import { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

const NewPoll = (props) => {
  const [optionsValue, setOptionsValue] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const navigate = useNavigate();

  const { dispatch } = props;

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setOptionsValue({
      ...optionsValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { optionOne, optionTwo } = optionsValue;

    dispatch(handleSaveQuestion(optionOne, optionTwo));
    setOptionsValue({
      optionOne: "",
      optionTwo: "",
    });

    // Redirect to dashboard
    navigate("/");
  };

  return (
    <Card className="text-center" style={{ marginTop: "30px" }}>
      <Card.Header>Create a new pool</Card.Header>
      <Card.Body style={{ width: "80%", margin: "auto" }}>
        <Card.Title>Would you rather?</Card.Title>
        <Form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                data-testid="optionOne-input"
                placeholder="Option one.."
                id="optionOne"
                name="optionOne"
                onChange={handleInputChange}
                value={optionsValue.optionOne}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span>or</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                data-testid="optionTwo-input"
                placeholder="Option two.."
                id="optionTwo"
                name="optionTwo"
                onChange={handleInputChange}
                value={optionsValue.optionTwo}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <Button
                type="submit"
                data-testid="new-poll-submit"
                disabled={
                  optionsValue.optionOne === "" && optionsValue.optionTwo === ""
                }
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default connect()(NewPoll);
