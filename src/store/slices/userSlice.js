import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionKey: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSessionKey(state, action) {
      const { key } = action.payload;

      state.sessionKey = key;
    },
  },
});

export const { setSessionKey, setUserId } = userSlice.actions;
export default userSlice.reducer;
