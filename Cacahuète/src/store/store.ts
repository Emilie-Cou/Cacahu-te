import { configureStore } from "@reduxjs/toolkit";
import jeuReducer from "./slices/jeu.slice.ts"

export const store = configureStore({
    reducer: {
        jeu: jeuReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch