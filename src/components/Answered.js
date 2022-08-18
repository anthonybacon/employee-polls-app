/**
 * Answered.js
 * 
 * Component that display the options for the question.
 * Each option is displayed by render the AnswerDetail component.
 * 
 */

import { connect } from "react-redux";
import CardGroup from "react-bootstrap/CardGroup";
import AnswerDetails from "./AnswerDetails";
import NotFound from "./NotFound";

const Answered = (props) => {
  const { questions, authedUser, id } = props;
  const question = questions[id];

   // Display NotFound if question doesn't exist
  if (!question) {
    return <NotFound />
  }

  const { optionOne, optionTwo } = question;
  const usersOneVotes = optionOne.votes;
  const usersTwoVotes = optionTwo.votes;

  const allVotes = usersOneVotes.length + usersTwoVotes.length;
  const onePerc = ((usersOneVotes.length / allVotes) * 100).toFixed(2);
  const twoPerc = ((usersTwoVotes.length / allVotes) * 100).toFixed(2);

  const userHasVotedOne = usersOneVotes.includes(authedUser);
  const userHasVotedTwo = usersTwoVotes.includes(authedUser);

  return (
    <CardGroup style={{ marginTop: "30px" }}>
      <AnswerDetails
        userHasVoted={userHasVotedOne}
        option={optionOne.text}
        percentage={onePerc}
        allVotes={allVotes}
        answers={optionOne.votes.length}
      />
      <AnswerDetails
        userHasVoted={userHasVotedTwo}
        option={optionTwo.text}
        percentage={twoPerc}
        allVotes={allVotes}
        answers={optionTwo.votes.length}
      />
    </CardGroup>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  // Get authUser questions
  return {
    authedUser,
    users,
    questions,
  };
};
export default connect(mapStateToProps)(Answered);
