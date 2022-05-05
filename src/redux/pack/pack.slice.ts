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
        openPack: (state) => {
            state.packVisible = true;
        }
    }
})

export const packReducer = packSlice.reducer;
export const { openPack } = packSlice.actions;