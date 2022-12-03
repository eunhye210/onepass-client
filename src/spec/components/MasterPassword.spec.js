import { fireEvent, screen, waitFor } from "@testing-library/react";

import MasterPassword from "../../components/features/MasterPassword";
import { srpLogin, srpSaltAndVerifier } from "../../services/processSRP";
import { validateNewPasswordForm } from "../../services/validateForms";
import { changeMasterPassword } from "../../services/apiRequests";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  changeMasterPassword: jest.fn(),
}));

jest.mock("../../services/processSRP.js", () => ({
  srpLogin: jest.fn(),
  srpSaltAndVerifier: jest.fn(),
}));

jest.mock("../../services/validateForms.js", () => ({
  validateNewPasswordForm: jest.fn(),
}));

describe("<MasterPassword />", () => {
  it("'Reset MasterPassword' title should show", () => {
    renderWithProviders(<MasterPassword />);

    expect(screen.getByText("Reset MasterPassword")).toBeInTheDocument();
  });

  it("Should show Email, Current Password, New Password, Confirm New Password label", () => {
    renderWithProviders(<MasterPassword />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Current Password")).toBeInTheDocument();
    expect(screen.getByText("New Password")).toBeInTheDocument();
    expect(screen.getByText("Confirm New Password")).toBeInTheDocument();
  });

  it("Email, Current Password, New Password, Confirm New Password input box should exist", async () => {
    renderWithProviders(<MasterPassword />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "test@test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testPassword1" } });
    fireEvent.change(inputElement[2], { target: { value: "testPassword2" } });
    fireEvent.change(inputElement[3], { target: { value: "testPassword2" } });

    await waitFor(() => {
      expect(inputElement[0].value).toBe("test@test.com");
      expect(inputElement[1].value).toBe("testPassword1");
      expect(inputElement[2].value).toBe("testPassword2");
      expect(inputElement[3].value).toBe("testPassword2");
    });
  });

  it("Success message should show when currentPassword is confirmed", async () => {
    srpLogin.mockReturnValue({ type: "success" });
    renderWithProviders(<MasterPassword />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "test@test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testPassword1" } });

    const buttonElement = screen.getByText("Check");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(
        screen.getByText("Your current password is confirmed. Please continue.")
      ).toBeInTheDocument();
    });
  });

  it("Fail message should show when currentPassword is not confirmed", async () => {
    srpLogin.mockReturnValue({ type: "fail" });
    renderWithProviders(<MasterPassword />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "test@test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testPassword1" } });

    const buttonElement = screen.getByText("Check");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(
        screen.getByText("Incorrect password. Please try again.")
      ).toBeInTheDocument();
    });
  });

  it("Change Button is undisabled when current Password is confirmed", async () => {
    srpLogin.mockReturnValue({ type: "success" });
    validateNewPasswordForm.mockReturnValue([]);
    srpSaltAndVerifier.mockReturnValue({ salt: "salt", verifier: "verifier" });
    changeMasterPassword.mockReturnValue(true);

    renderWithProviders(<MasterPassword />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "test@test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testPassword1" } });

    const checkButton = screen.getByText("Check");
    fireEvent.click(checkButton);

    fireEvent.change(inputElement[2], { target: { value: "testPassword2" } });
    fireEvent.change(inputElement[3], { target: { value: "testPassword2" } });

    await waitFor(() => {
      const buttonElement = screen.getByText("Change");
      expect(buttonElement).toBeDisabled(false);
    });
  });
});
