import { createSlice } from "@reduxjs/toolkit";
const address = createSlice({
  name: "addressReducer",
  initialState: {
    isJibun: true,
  },
  reducers: {
    toggleType: (state, action) => {
      state.isJibun = !state.isJibun;
    },
  },
});

export const { toggleType } = address.actions;
export const isJibunSelector = (state) => state.address.isJibun;

export default address.reducer;
