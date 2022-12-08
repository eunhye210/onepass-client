import { screen, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";

import PasswordList from "../../components/features/PasswordList";
import { decryptData } from "../../services/processCrypto";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  getUserInfo: jest.fn(),
}));

jest.mock("../../services/processCrypto.js", () => ({
  decryptData: jest.fn(),
}));

describe("<PasswordList />", () => {
  it("'My Passwords' title should show", async () => {
    renderWithProviders(<PasswordList />);

    await waitFor(() => {
      expect(screen.getByText("My Passwords")).toBeInTheDocument();
    });
  });

  it("Empty message should show if there is no data", async () => {
    renderWithProviders(<PasswordList />);

    await waitFor(() => {
      expect(
        screen.getByText("Empty. Add new password to your list !")
      ).toBeInTheDocument();
    });
  });

  it("Given Password list data should be shown", async () => {
    decryptData.mockReturnValue([
      {
        url: "www.test.com",
        username: "testUsername",
        password: "testPassword",
      },
    ]);
    renderWithProviders(<PasswordList />);

    await waitFor(() => {
      expect(screen.getByText("www.test.com")).toBeInTheDocument();
      expect(screen.getByText("testUsername")).toBeInTheDocument();
      expect(screen.getByText("********")).toBeInTheDocument();
    });
  });
});
