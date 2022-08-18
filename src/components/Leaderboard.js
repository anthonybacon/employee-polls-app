/**
 * Leaderboard.js
 *
 * Component that displays all the users sorted by score
 * calculated considering questions asked and questions answered.
 *
 */

import { connect } from "react-redux";
import LeaderboardEntry from "./LeaderboardEntry";

const Leaderboard = ({ usersSortedByScore }) => {
  console.log(usersSortedByScore);
  return (
    <div>
      {usersSortedByScore &&
        usersSortedByScore.map((userId) => (
          <LeaderboardEntry key={userId} id={userId} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  // Sum all the answers and all the questions in order to determine the leaderboard
  const usersSortedByScore = Object.keys(users).sort((userA, userB) => {
    const scoreUserA =
      Object.keys(users[userA].answers).length + users[userA].questions.length;
    const scoreUserB =
      Object.keys(users[userB].answers).length + users[userB].questions.length;

    return scoreUserB - scoreUserA;
  });

  return {
    usersSortedByScore,
  };
};

export default connect(mapStateToProps)(Leaderboard);
