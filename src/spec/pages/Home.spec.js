import { screen } from "@testing-library/react";

import Home from "../../pages/Home";
import renderWithProviders from "../utils/test-utils";

describe("<Home />", () => {
  it("'OnePass' title should show", () => {
    renderWithProviders(<Home />);

    expect(screen.getByText("OnePass")).toBeInTheDocument();
  });

  it("Subtitle should show", () => {
    renderWithProviders(<Home />);

    expect(
      screen.getByText("Login easily and safely with one Master Password.")
    ).toBeInTheDocument();
  });

  it("There should be Sign Up & Login button", () => {
    renderWithProviders(<Home />);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
