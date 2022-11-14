import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";

const reducer = {
  modal: modalReducer,
};

const store = configureStore({
  reducer,
});

export default store;
