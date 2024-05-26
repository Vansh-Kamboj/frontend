import { configureStore } from "@reduxjs/toolkit";
import paramslice from "./slices/paramslice";


export const store = configureStore({
    reducer: {
        cart: paramslice,
    },
    devTools: true,
});
