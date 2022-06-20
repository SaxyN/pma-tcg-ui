import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    showMissingCards: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        hideMissingCards: (state: any) => {
            state.showMissingCards = false;
        },
        showMissingCards: (state: any) => {
            state.showMissingCards = true;
        },
        resetUserSettings: (state: any) => {
            state.showMissingCards = true;
        }
    }
})

export const userReducer = userSlice.reducer
export const {
    hideMissingCards,
    showMissingCards,
    resetUserSettings
} = userSlice.actions;