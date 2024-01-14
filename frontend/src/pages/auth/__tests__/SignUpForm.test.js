import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUpForm from "../SignUpForm";

test("renders Login page", () => {
  render(
    <Router>
      <SignUpForm />
    </Router>
  );

  const usernameField = screen.getByPlaceholderText("Username");
  expect(usernameField).toBeInTheDocument();

  const passwordField1 = screen.getByPlaceholderText("Password");
  expect(passwordField1).toBeInTheDocument();

  const passwordField2 = screen.getByPlaceholderText("Confirm password");
  expect(passwordField2).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Sign up" });
  expect(submitButton).toBeInTheDocument();
});