import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/CardModel";


interface showcaseState {
    showcaseVisible: boolean,
    showcaseData: Card,
}

const initialState: showcaseState = {
    showcaseVisible: false,
    showcaseData: {
        uid: "",
        id: 0,
        type: 0,
        img: "",
        card_back: "",
        name: "",
        set: "",
        specialTag: "",
        holoX: "",
        holoY: "",
        pattern: "",
    },
}

export const showcaseSlice = createSlice({
    name: "pack",
    initialState,
    reducers: {
        openShowcase: (state: showcaseState) => {
            state.showcaseVisible = true;
        },
        closeShowcase: (state: showcaseState) => {
            state.showcaseVisible = false;
        },
        updateShowcase: (state: showcaseState, { payload }: PayloadAction<any>) => {
            state.showcaseData = payload.showcaseData;
        },
        resetShowcase: (state: showcaseState) => {
            state.showcaseData = {
                uid: "",
                id: 0,
                type: 0,
                img: "",
                card_back: "",
                name: "",
                set: "",
                specialTag: "",
                holoX: "",
                holoY: "",
                pattern: "",
            }
        }
    }
})

export const showcaseReducer = showcaseSlice.reducer;
export const { openShowcase, closeShowcase, updateShowcase, resetShowcase } = showcaseSlice.actions;