import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IGame {
    nbreJoueur : number
    joueurs: IJoueurs[]
}

interface IJoueurs {
    name: string;
    id: number;
}

const initialState : IGame = {
    nbreJoueur: 4,
    joueurs: []

}

const NbreSlice = createSlice({
    name: 'nbre',
    initialState,
    reducers: {
        setNbre: (state, action : PayloadAction<IGame>) => {
            console.log('payload', action.payload)
            state.nbreJoueur = action.payload.nbreJoueur
            state.joueurs = action.payload.joueurs
        }
    }
})

export const { setNbre } = NbreSlice.actions
export const selectNbre = (state : RootState) => state.nbre
export default NbreSlice.reducer
