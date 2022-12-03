import { screen } from "@testing-library/react";

import ShowModal from "../../components/shared/ShowModal";
import renderWithProviders from "../utils/test-utils";

describe("<ShowModal />", () => {
  it("ShowModal component should show children prop", () => {
    renderWithProviders(<ShowModal children="Children" />);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
