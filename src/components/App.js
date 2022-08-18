/**
 * App.js
 * 
 * Component that defines which component must be displayed
 * considering the authedUser value
 * 
 */

import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import ReservedArea from "./ReservedArea";
import Login from "./Login";
import { Container, Row, Col } from "react-bootstrap";

const App = (props) => {

  // Populate store with initial data
  useEffect(() => {
    props.initData();
  }, [props]);

  const { authedUser } = props;
  return (
    <Container>
      <LoadingBar />
      <Row className="justify-content-md-center">
        <Col>
          {authedUser !== null ? <ReservedArea /> : <Login />}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  initData: () => dispatch(handleInitialData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
