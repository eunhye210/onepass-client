import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  message: "",
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen(state, action) {
      const { title, message } = action.payload;

      state.title = title;
      state.message = message;
      state.isModalOpen = true;
    },
    setModalClose(state) {
      state.isModalOpen = false;
    },
  },
});

export const { setModalOpen, setModalClose } = modalSlice.actions;
export default modalSlice.reducer;
