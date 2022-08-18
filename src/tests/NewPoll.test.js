// NewPoll.test.js

import { fireEvent, render, screen } from "@testing-library/react";
import NewPoll from "../components/NewPoll";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { MemoryRouter } from "react-router-dom";

describe("NewPoll component", () => {
  const store = createStore(reducer, middleware);
  const optionOneInputId = "optionOne-input";
  const submitPollButtonId = "new-poll-submit";

  it("Check button component hasn't disabled attribute after changing at least one option", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const submitPollButton = screen.getByTestId(submitPollButtonId);
    expect(submitPollButton).toBeInTheDocument();
    expect(submitPollButton).toHaveAttribute("disabled");

    const optionOneInput = screen.getByTestId(optionOneInputId);
    expect(optionOneInput).toBeInTheDocument();
    fireEvent.change(optionOneInput, { target: { value: "Ride a Bike" } });
    expect(submitPollButton).not.toHaveAttribute("disabled");
  });
});
