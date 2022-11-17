import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  title: "",
  message: "",
  dataId: "",
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen(state, action) {
      const { type, title, message, dataId } = action.payload;

      state.type = type;
      state.title = title;
      state.message = message;
      state.dataId = dataId;
      state.isModalOpen = true;
    },
    setModalClose(state) {
      state.isModalOpen = false;
    },
  },
});

export const { setModalOpen, setModalClose } = modalSlice.actions;
export default modalSlice.reducer;
