import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import NotificationPage from "../NotificationPage";

const renderLoggedOutNotificationPage = () => {
  render(
    <BrowserRouter>
      <NotificationPage />
    </BrowserRouter>
  );
};

const renderLoggedInNotificationPage = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <NotificationPage />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders logged-out message for logged-out users", async () => {
  renderLoggedOutNotificationPage();
  const loggedOutMessage = await screen.findByText("Sorry, the page you're looking for doesn't exist");
  expect(loggedOutMessage).toBeInTheDocument();
});