// UseAvatar.test.js

import * as React from "react";
import { render } from "@testing-library/react";
import UserAvatar from "../components/UserAvatar";

describe("UserAvatar", () => {
  it("Snapshot test component UserAvatar (with user props)", () => {
    const user = {
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: '/assets/sarah.png'
    }
    const view = render(<UserAvatar user={user}/>);
    expect(view).toMatchSnapshot();
  });
});
