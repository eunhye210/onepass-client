import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";

import store from "../../store/configureStore";

export default function renderWithProviders(children) {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>,
    {
      wrapper: BrowserRouter,
    }
  );
}
