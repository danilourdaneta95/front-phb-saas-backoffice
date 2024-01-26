import { configureStore } from "@reduxjs/toolkit";
import convenioSlice from "@/app/_redux/_slices/convenio";

export const store = configureStore({
  reducer: {
    convenios: convenioSlice,
  },
});
