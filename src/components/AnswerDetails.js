/**
 * AnswerDetail.js
 *
 * Component that render the details about a specific option
 * of the poll answered.
 *
 */

import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

const AnswerDetails = (props) => {
  return (
    <Card
      bg={props.userHasVoted ? "success" : "light"}
      text={props.userHasVoted ? "white" : "dark"}
    >
      <Card.Header>{props.option}</Card.Header>
      <Card.Body>
        <ProgressBar
          style={{ fontSize: "16px", height: "24px" }}
          now={props.percentage}
          label={`${props.percentage}%`}
        />
      </Card.Body>
      <Card.Footer style={{ fontSize: "12px" }}>
        ({props.answers} of {props.allVotes})
      </Card.Footer>
    </Card>
  );
};

export default AnswerDetails;
