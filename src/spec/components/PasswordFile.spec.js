import { screen } from "@testing-library/react";

import PasswordFile from "../../components/features/PasswordFile";
import renderWithProviders from "../utils/test-utils";

describe("<PasswordFile />", () => {
  it("'File Import' title should show", () => {
    renderWithProviders(<PasswordFile />);

    expect(screen.getByText("File Import")).toBeInTheDocument();
  });

  it("Should have file import Input", () => {
    renderWithProviders(<PasswordFile />);

    expect(screen.getByPlaceholderText("Choose a file")).toBeInTheDocument();
  });

  it("Should have a link", () => {
    renderWithProviders(<PasswordFile />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://support.google.com/chrome/answer/95606");
  });
});
