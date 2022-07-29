import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/CardModel";

interface tradingState {
    showTrading: boolean,

    localTradeReady: boolean,
    localSelected: Card[],

    remoteTradeReady: boolean,
    remoteSelected: Card[],
}

const initialState: tradingState = {
    showTrading: false,

    localTradeReady: false,
    localSelected: [], // Viewed as personal selection

    remoteTradeReady: false,
    remoteSelected: [], // Viewed as other person's selection
}

export const tradingSlice = createSlice({
    name: "trade",
    initialState,
    reducers: {
        openTrading: (state: tradingState) => {
            state.showTrading = true;
        },
        closeTrading: (state: tradingState) => {
            state.showTrading = false;
        },
        updateTrade: (state: tradingState, { payload }: PayloadAction<any>) => {
            state.localSelected = payload.tradeData.localSelected;
            state.remoteSelected = payload.tradeData.remoteSelected;
            state.localTradeReady = payload.tradeData.localReady;
            state.remoteTradeReady = payload.tradeData.remoteReady;
        },

    }
})

export const tradingReducer = tradingSlice.reducer;
export const { openTrading, closeTrading, updateTrade } = tradingSlice.actions;