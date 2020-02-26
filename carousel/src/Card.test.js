import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke
it("renders without crashing", function () {
  render(<Card/>);
});

// Snapshot
it("matches the snapshot", function() {
  const { asFragment } = render(<Card currNum={1} />);
  expect(asFragment()).toMatchSnapshot();
});
