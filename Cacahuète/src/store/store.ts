import { configureStore } from "@reduxjs/toolkit";
import nbreReducer from "./slices/nbre.slice.ts"

export const store = configureStore({
    reducer: {
        nbre: nbreReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch