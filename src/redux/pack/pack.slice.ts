import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/CardModel";

const initialState = {
    packVisible: false,
    pack_cards: [],
}

export const packSlice = createSlice({
    name: "pack",
    initialState,
    reducers: {
        openPack: (state: any) => {
            state.packVisible = true;
        },
        closePack: (state: any) => {
            state.packVisible = false;
        },
        updatePackCards: (state: any, { payload }: PayloadAction<any>) => {
            state.pack_cards = payload.packCards;
        },
    }
})

export const packReducer = packSlice.reducer;
export const { openPack, closePack, updatePackCards } = packSlice.actions;