import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Card, CardList } from "../../"

const initialState = {
    paginationSize: 10,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updatePaginationSize: (state, { payload }: PayloadAction<any>) => {
            state.paginationSize = payload.newPaginationSize;
        },
        resetPaginationSize: (state) => {
            state.paginationSize = 10;
        }
    }
})

export const userReducer = userSlice.reducer
export const {
    updatePaginationSize,
    resetPaginationSize,
} = userSlice.actions;