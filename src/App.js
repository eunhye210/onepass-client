import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Signup, { action as signupAction } from "./pages/Signup";
import Login from "./pages/Login";

import theme from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} action={signupAction} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
