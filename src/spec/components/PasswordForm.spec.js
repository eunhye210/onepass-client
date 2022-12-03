import { screen, fireEvent, waitFor } from "@testing-library/react";

import PasswordForm from "../../components/features/PasswordForm";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  addPassword: jest.fn(),
}));

describe("<PasswordForm />", () => {
  it("'Add Password' title should show", () => {
    renderWithProviders(<PasswordForm />);

    expect(screen.getByText("Add Password")).toBeInTheDocument();
  });

  it("Should show URL, Username, Password label", () => {
    renderWithProviders(<PasswordForm />);

    expect(screen.getByText("URL")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("URL, Username, Password input box should exist", async () => {
    renderWithProviders(<PasswordForm />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "www.test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testUsername" } });
    fireEvent.change(inputElement[2], { target: { value: "testPassword" } });

    await waitFor(() => {
      expect(inputElement[0].value).toBe("www.test.com");
      expect(inputElement[1].value).toBe("testUsername");
      expect(inputElement[2].value).toBe("testPassword");
    });
  });

  it("Input box should be empty when Add button is clicked", async () => {
    renderWithProviders(<PasswordForm />);

    const inputElement = screen.getAllByRole("textbox");

    fireEvent.change(inputElement[0], { target: { value: "www.test.com" } });
    fireEvent.change(inputElement[1], { target: { value: "testUsername" } });
    fireEvent.change(inputElement[2], { target: { value: "testPassword" } });

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(inputElement[0].value).toBe("");
      expect(inputElement[1].value).toBe("");
      expect(inputElement[2].value).toBe("");
    });
  });
});
