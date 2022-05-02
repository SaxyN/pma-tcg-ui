import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/CardModel";

const initialState = {
    binderVisible: false,
    activeCardProfile: null,
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        createCardProfile: (state, { payload }: PayloadAction<any>) => {

        },
        updateActiveCardProfile: (state, { payload }: PayloadAction<any>) => {

        },
        openBinder: (state) => {
            state.binderVisible = true;
        }
    }
})

export const binderReducer = binderSlice.reducer;
export const { createCardProfile, updateActiveCardProfile, openBinder } = binderSlice.actions;