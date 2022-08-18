/**
 * LeaderboardEntry.js
 *
 * Component that displays the user scores' details.
 *
 */

import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import UserAvatar from "./UserAvatar";
import { FcCheckmark } from "react-icons/fc";

const LeaderboardEntry = ({ users, id, authedUser }) => {
  const user = users[id];

  const isAuthedUser = authedUser === id ? true : false;

  const answersLength = Object.keys(user.answers).length;
  const questionsLength = user.questions.length;
  const score = answersLength + questionsLength;

  return (
    <Card data-testid="user-score" style={{ marginTop: "30px" }}>
      <Card.Header className="text-center">
        <UserAvatar user={user} />
        {user.name}
        {isAuthedUser ? <FcCheckmark style={{ marginLeft: "10px" }} /> : ""}
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-right">
          Score: <span data-testid="total-score">{score}</span>
        </Card.Title>
        <Card.Text>
          Answered: <span data-testid="answered-score">{answersLength}</span>
          <br />
          Asked: <span data-testid="asked-score">{questionsLength}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(LeaderboardEntry);
