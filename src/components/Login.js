/**
 * Login.js
 *
 * Component that display all the users in the _DATA.js file
 * and set logged user
 *
 */

import { setLoggedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

const Login = (props) => {
  // Use useState to save values from input field
  const [userValue, setUserValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLoggedUser(userValue);
  };

  const handleUserChange = (event) => {
    const val = event.target.value;
    setUserValue(val);
  };

  return (
    <Container
      className="text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card style={{width: '450px'}}>
        <Card.Img variant="top" style={{padding: "40px"}} src="/assets/header-img.png" />
        <Card.Header>
          <h3>Employee Polls</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>Start answering and create your own polls!</Card.Text>
          <Form onSubmit={handleSubmit}>
            
            <Form.Select
              style={{ marginTop: "30px" }}
              id="users-select"
              data-testid="user-select"
              onChange={handleUserChange}
            >
              <option value="">Select user..</option>
              {props.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Form.Select>
            <Button
              data-testid="login-button"
              className="text-center"
              variant="primary"
              type="submit"
              style={{ marginTop: "20px", width: "150px", textAlign: "center" }}
              disabled={userValue === ""}
            >
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps, { setLoggedUser })(Login);
