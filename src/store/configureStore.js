import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";

const reducer = {
  modal: modalReducer,
  user: userReducer,
};

const store = configureStore({
  reducer,
});

export default store;
