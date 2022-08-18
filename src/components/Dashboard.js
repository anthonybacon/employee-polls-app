/**
 * Dashboard.js
 *
 * Homepage component for the logged user.
 * It displays the unanswered/answered tabs for the logged user
 *
 */

import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Dashboard = (props) => {
  const { unansweredQuestion, answeredQuestion } = props;

  return (
    <div style={{ marginTop: "30px" }}>
      <Tabs defaultActiveKey="unanswered">
        <Tab
          eventKey="unanswered"
          title="Unanswered"
          className="unanswered-questions"
        >
          <QuestionsList questions={unansweredQuestion} />
        </Tab>

        <Tab
          eventKey="answered"
          title="Answered"
          className="answered-questions"
        >
          <QuestionsList questions={answeredQuestion} />
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const answersObj = users[authedUser].answers;

  // Get user question answered and question unanswered
  const answeredIds = Object.keys(answersObj);
  const answeredQuestion = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestion = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredQuestion,
    unansweredQuestion,
  };
};

export default connect(mapStateToProps)(Dashboard);
