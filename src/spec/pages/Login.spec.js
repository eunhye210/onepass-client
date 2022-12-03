import { fireEvent, screen, waitFor } from "@testing-library/react";

import Login from "../../pages/Login";
import { srpLogin } from "../../services/processSRP";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  checkOTP: jest.fn(),
  deleteOTP: jest.fn(),
}));

jest.mock("../../services/processSRP.js", () => ({
  srpLogin: jest.fn(),
}));

describe("<Login />", () => {
  it("'Login' title should show", () => {
    renderWithProviders(<Login />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("Email & Password input should exist", async () => {
    renderWithProviders(<Login />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });
  });

  it("Error message should show if submitted login form is not completed", async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByText("Please fill in the form.")).toBeInTheDocument();
    });
  });

  it("Link to OTP page should exist", () => {
    renderWithProviders(<Login />);

    expect(screen.getByText("Forgot Password ?")).toBeInTheDocument();
  });

  it("Error message should show if given password is incorrect", async () => {
    srpLogin.mockReturnValue({ type: "error", result: "Incorrect password." });
    renderWithProviders(<Login />);

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });

    const buttonElement = screen.getByText("Submit");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByText("Incorrect password.")).toBeInTheDocument();
    });
  });
});
