import { render, screen } from "@testing-library/react";
import Asset from "../Asset";

test("renders with a spinner", () => {
  render(<Asset spinner={true} />);
  const spinner = screen.getByTestId("spinner-test-id");
  expect(spinner).toBeInTheDocument();
});

test("renders with a message", () => {
  render(<Asset message="Testing" />);
  const message = screen.getByText("Testing");
  expect(message).toBeInTheDocument();
});