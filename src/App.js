import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Signup, { action as signupAction } from "./pages/Signup";
import Login, { action as loginAction } from "./pages/Login";
import OneTimePassword, { action as otpAction } from "./pages/OneTimePassword";
import MyPage from "./pages/MyPage";
import PasswordForm, { action as formAction } from "./components/PasswordForm";

import theme from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} action={signupAction} />
      <Route path="/login" element={<Login />} action={loginAction} />
      <Route path="/otp" element={<OneTimePassword />} action={otpAction} />
      <Route path="/users/:userId" element={<MyPage />}>
        <Route path="password" element={<PasswordForm />} action={formAction} />
      </Route>
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
