import { screen } from "@testing-library/react";

import OneTimePassword from "../../pages/OneTimePassword";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  requestOTP: jest.fn(),
}));

describe("<OneTimePassword />", () => {
  it("'Forgot Password ?' title should show", () => {
    renderWithProviders(<OneTimePassword />);

    expect(screen.getByText("Forgot Password ?")).toBeInTheDocument();
  });

  it("Message should show", () => {
    renderWithProviders(<OneTimePassword />);

    expect(
      screen.getByText(
        "Please enter the email address used to create your OnePass account, and we'll send you instructions for resetting your password."
      )
    ).toBeInTheDocument();
  });

  it("Email input should exist", () => {
    renderWithProviders(<OneTimePassword />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("Submit button should exist", () => {
    renderWithProviders(<OneTimePassword />);

    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
