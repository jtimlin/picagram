import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

test("renders message", () => {
  render(<NotFound text="Sorry, the page you're looking for doesn't exist" />);
  const message = screen.getByText("Sorry, the page you're looking for doesn't exist");
  expect(message).toBeInTheDocument();
});