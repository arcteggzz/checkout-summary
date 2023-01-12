import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  estTotal: 124.99,
  promoCodeApplied: false,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setEstTotalDiscount: (state) => {
      state.estTotal = state.estTotal - 0.1 * state.estTotal;
    },
    setPromoCodeApplied: (state) => {
      state.promoCodeApplied = true;
    },
  },
});

export const { setEstTotalDiscount, setPromoCodeApplied } =
  detailsSlice.actions;

export default detailsSlice.reducer;
