// Navigation.test.js

import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";
import { users } from "./mock/users";
import { setLoggedUser } from "../actions/authedUser";
import { retrieveUsers } from "../actions/users";

describe("Navigation component", () => {
  const store = createStore(reducer, middleware);
  const authedUser = "sarahedo";

  beforeAll(() => {
    store.dispatch(setLoggedUser(authedUser));
    store.dispatch(retrieveUsers(users));
  });

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>
    );
  };

  it("Check navigation links", () => {
    renderComponent();
    const homeLink = screen.getByTestId("home-link");
    const newPollLink = screen.getByTestId("add-link");
    const leaderBoard = screen.getByTestId("leaderboard-link");

    expect(homeLink).toBeInTheDocument();
    expect(newPollLink).toBeInTheDocument();
    expect(leaderBoard).toBeInTheDocument();
  });

  it("Check correct authed user name on navigation bar", () => {
    renderComponent();

    const user = users[authedUser];
    const authedUserName = screen.getByTestId("authedUserName").textContent;
    expect(authedUserName).toContain(user.name);
  });
});
