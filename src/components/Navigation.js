/**
 * Navigation.js
 *
 * Component that display all the component that can be reached
 * and also the logged user name (with avatar and logout button)
 *
 */

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoggedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import UserAvatar from "./UserAvatar";

const Navigation = (props) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    props.setLoggedUser(null);

    // Redirect to the starter page
    navigate("/");
  };
  return (
    <Navbar className="border-bottom">
      <Nav className="col-6 justify-content-start">
        <Nav.Link as={Link} to="/" data-testid="home-link">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/add" data-testid="add-link">
          New Poll
        </Nav.Link>
        <Nav.Link as={Link} to="/leaderboard" data-testid="leaderboard-link">
          Leaderboard
        </Nav.Link>
      </Nav>
      <Nav
        data-testid="rightNav-component"
        className="col-6 justify-content-end"
      >
        <Navbar.Text data-testid="authedUserName">
          <UserAvatar user={props.loggedUser} />
          {props.loggedUser.name}
        </Navbar.Text>
        <Button
          variant="danger"
          size="sm"
          style={{ marginLeft: "10px", height: "40px", marginTop: "8px" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = ({ users, authedUser, questions }) => {
  // Get info about logged user
  const loggedUser = authedUser ? users[authedUser] : null;
  return { authedUser, users, loggedUser, questions };
};
export default connect(mapStateToProps, { setLoggedUser })(Navigation);
