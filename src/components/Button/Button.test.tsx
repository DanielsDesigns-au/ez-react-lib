import Button from ".";
import React from "react";
import { render } from "@testing-library/react";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});
