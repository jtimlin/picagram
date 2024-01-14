import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const logInLink = screen.getByRole("link", { name: "Log In" });
  expect(logInLink).toBeInTheDocument();
});

test("renders Profile link for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders Notifications link for a logged in user", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
  
    const NotificationsLink = await screen.findByRole("link", { name: "Notifications" });
    expect(NotificationsLink).toBeInTheDocument();
  });
  

test("renders Sign in and Sign up buttons after log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole("link", { name: "Sign Out" });
  fireEvent.click(signOutLink);

  const logInLink = await screen.findByRole("link", { name: "Log In" });
  const signUpLink = await screen.findByRole("link", { name: "Sign Up" });

  expect(logInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});