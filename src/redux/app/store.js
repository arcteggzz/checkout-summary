import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../features/Details/detailsSlice";

const store = configureStore({
  reducer: { detailsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
