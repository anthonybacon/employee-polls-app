// Login.test.js

import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { users } from "./mock/users";
import { retrieveUsers } from "../actions/users";

describe("Login component", () => {
  const store = createStore(reducer, middleware);
  const userSelectId = "user-select";
  const loginButtonId = "login-button";

  beforeAll(() => {
    store.dispatch(retrieveUsers(users));
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  };


  it("Check select and submit button present on Login component", () => {
    renderComponent();
    const userSelectInput = screen.getByTestId(userSelectId);
    const buttonLogin = screen.getByTestId(loginButtonId);
    expect(userSelectInput).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
  });

  it("Check submit button hans't disabled property after user selection", () => {
    renderComponent();
    const buttonLogin = screen.getByTestId(loginButtonId);
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toHaveAttribute("disabled");

    const userSelectInput = screen.getByTestId(userSelectId);
    expect(userSelectInput).toBeInTheDocument();
    
    fireEvent.change(userSelectInput, { target: { value: "sarahedo" } });
    expect(buttonLogin).not.toHaveAttribute("disabled");
    
  });
});
