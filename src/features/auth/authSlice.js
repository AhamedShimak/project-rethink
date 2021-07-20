import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "regReq",
  initialState: {
    regReq: {},
    loading: false,
    errors: [],
  },
  reducers: {
    createRegReq: (state) => {
      state.loading = true;
    },
    createRegReqSuccess: (state, { payload }) => {
      state.regReq = payload;
      state.loading = false;
      state.errors = false;
    },
    createRegReqFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createRegReq, createRegReqSuccess, createRegReqFailure } =
  authSlice.actions;
export const authSelector = (state) => state.regReq;

export default authSlice.reducer;
