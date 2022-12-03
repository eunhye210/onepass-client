import { fireEvent, screen, waitFor } from "@testing-library/react";

import Signup from "../../pages/Signup";
import { sendConfirmationCodeEmail } from "../../services/apiRequests";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  signup: jest.fn(),
  sendConfirmationCodeEmail: jest.fn(),
}));

describe("<Signup />", () => {
  it("'Sign Up' title should show", () => {
    renderWithProviders(<Signup />);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("Username & Email & Confirmation Code & Password & ConfirmPassword input should exist", async () => {
    renderWithProviders(<Signup />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Confirmation Code")
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("ConfirmPassword")
      ).toBeInTheDocument();
    });
  });

  it("Error message should show if given username is not a valid email", async () => {
    renderWithProviders(<Signup />);

    const usernameInput = screen.getByPlaceholderText("Username");
    fireEvent.change(usernameInput, { target: { value: "test@test" } });

    const verifyButton = screen.getByText("verify");
    fireEvent.click(verifyButton);

    await waitFor(() => {
      expect(
        screen.getByText("Invalid email address. Try again.")
      ).toBeInTheDocument();
    });
  });

  it("Error message should show if confirmationCode and email confirmationCode is not same", async () => {
    sendConfirmationCodeEmail.mockReturnValue("5678");
    renderWithProviders(<Signup />);

    const confirmationCodeInput =
      screen.getByPlaceholderText("Confirmation Code");
    fireEvent.change(confirmationCodeInput, { target: { value: "1234" } });

    const confirmButton = screen.getByText("submit");
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(
        screen.getByText("Incorrect confirmation code. Please try again.")
      ).toBeInTheDocument();
    });
  });
});
