import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OneTimePassword from "./pages/OneTimePassword";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

import theme from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OneTimePassword />} />
      <Route path="/users/:userId" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
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
