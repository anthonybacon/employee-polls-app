// Leaderboard.test.js

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";
import { users } from "./mock/users";
import { setLoggedUser } from "../actions/authedUser";
import { retrieveUsers } from "../actions/users";
import Leaderboard from "../components/Leaderboard";

describe("Leaderboard component", () => {
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
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
  };

  it("Check numbers of users on leaderboard", () => {
    renderComponent();

    // Get all the users in the leaderboard
    const usersScore = screen.getAllByTestId("user-score");
    expect(usersScore).toHaveLength(4);
  });

  it("Check scores matching", () => {
    renderComponent();
    const usersScore = screen
      .getAllByTestId("total-score")
      .map((i) => i.textContent);

    const expectedScores = ["6", "5", "4", "1"];
    expect(Object.values(usersScore)).toEqual(expectedScores);
  });

  it("Check answered questions matching", () => {
    renderComponent();
    const usersAnswered = screen
      .getAllByTestId("answered-score")
      .map((i) => i.textContent);

    const expectedScores = ["4", "3", "2", "1"];
    expect(Object.values(usersAnswered)).toEqual(expectedScores);
  });

  it("Check asked questions matching", () => {
    renderComponent();
    const usersAsked = screen
      .getAllByTestId("asked-score")
      .map((i) => i.textContent);

    const expectedScores = ["2", "2", "2", "0"];
    expect(Object.values(usersAsked)).toEqual(expectedScores);
  });
});
