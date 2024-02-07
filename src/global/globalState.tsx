import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  mode: false,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggled: (state: any) => {
      state.toggle = true;
    },
    changedToggle: (state: any) => {
      state.toggle = false;
    },
    light: (state: any) => {
      state.mode = true;
    },
    dark: (state: any) => {
      state.mode = false;
    },
  },
});

export const { toggled, changedToggle, light, dark } = globalState.actions;

export default globalState.reducer;
