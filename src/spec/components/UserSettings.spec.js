import { screen, waitFor } from "@testing-library/react";

import UserSettings from "../../components/features/UserSettings";
import { getAccountSetting } from "../../services/apiRequests";
import renderWithProviders from "../utils/test-utils";

jest.mock("../../services/apiRequests.js", () => ({
  setAccountSetting: jest.fn(),
  getAccountSetting: jest.fn(),
}));

describe("<UserSettings />", () => {
  it("'Settings' title should show", async () => {
    getAccountSetting.mockReturnValue({ passwordOption: "good", sessionTimeout: "3h" });
    renderWithProviders(<UserSettings />);

    await waitFor(() => {
      expect(screen.getByText("Settings")).toBeInTheDocument();
    });
  });

  it("Should have 3 password generator options", async () => {
    getAccountSetting.mockReturnValue({ passwordOption: "good", sessionTimeout: "3h" });
    renderWithProviders(<UserSettings />);

    await waitFor(() => {
      expect(screen.getByText("Upper/Lowercase Letters & Numbers")).toBeInTheDocument();
      expect(screen.getByText("Upper/Lowercase Letters & Numbers & Symbols")).toBeInTheDocument();
      expect(screen.getByText("Easy to Memorize (word-based)")).toBeInTheDocument();
    });
  });

  it("Should have 3 login session timeout options", async () => {
    getAccountSetting.mockReturnValue({ passwordOption: "good", sessionTimeout: "3h" });
    renderWithProviders(<UserSettings />);

    await waitFor(() => {
      expect(screen.getByText("1h")).toBeInTheDocument();
      expect(screen.getByText("3h")).toBeInTheDocument();
      expect(screen.getByText("6h")).toBeInTheDocument();
      expect(screen.getByText("12h")).toBeInTheDocument();
      expect(screen.getByText("unlimited")).toBeInTheDocument();
    });
  });
});
