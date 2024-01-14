import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../SignInForm";

test("renders Login page", () => {
  render(
    <Router>
      <SignInForm />
    </Router>
  );

  // Check to see if username field is rendered to the user
  const usernameField = screen.getByPlaceholderText("Username");
  expect(usernameField).toBeInTheDocument();

  const passwordField = screen.getByPlaceholderText("Password");
  expect(passwordField).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Log In" });
  expect(submitButton).toBeInTheDocument();
});