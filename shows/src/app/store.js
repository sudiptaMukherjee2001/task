import { configureStore } from "@reduxjs/toolkit";
import apicallSlice from "../features/apicallSlice";
export const store = configureStore({
    reducer: {
        showsData: apicallSlice
    }
});