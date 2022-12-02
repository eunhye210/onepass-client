import { screen, fireEvent } from "@testing-library/react";

import ShowModal from "../../components/shared/ShowModal";
import renderWithProviders from "../utils/test-utils";

describe("<ShowModal />", () => {
  it("ShowModal component should show children prop", () => {
    renderWithProviders(<ShowModal children="Children" />);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("handleModal should not work when children prop is clicked", () => {
    const handleModal = jest.fn();

    renderWithProviders(<ShowModal children="Children" handleModal={handleModal} />);

    const chilrenNode = screen.getByText("Children");

    fireEvent.click(chilrenNode);

    expect(chilrenNode).toBeInTheDocument();
    expect(handleModal).toHaveBeenCalledTimes(0);
  });

  // it("handleModal should work when background is clicked", async () => {
  //   const handleModal = jest.fn();

  //   renderWithProviders(<ShowModal children="Children" handleModal={handleModal} />);

  //   const background = await screen.findByTestId("background");
  //   console.log("@@@", background);

  //   fireEvent.click(background);

  //   expect(handleModal).toHaveBeenCalledTimes(1);
  // });
});
