import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IGame {
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

const JeuSlice = createSlice({
    name: 'Jeu',
    initialState,
    reducers: {
        setJeu: (state, action : PayloadAction<IGame>) => {
            state.nbreJoueur = action.payload.nbreJoueur
            state.joueurs = action.payload.joueurs
        }
    }
})

export const { setJeu } = JeuSlice.actions
export const selectJeu = (state : RootState) => state.jeu
export default JeuSlice.reducer
