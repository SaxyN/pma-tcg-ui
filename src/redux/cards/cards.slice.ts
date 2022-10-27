import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Card, CardMiniData } from "../../models/CardModel";
import { BinderSlot } from "../../models/BinderSlot";

interface cardsState {
    cardsInfoTable: Card[][],
    cardsInfo: Card | {},
    subCollection: Card[],
}

const initialState: cardsState = {
    // Holds array of all cards
    cardsInfoTable: [[]],
    // Current card being displayed in the card info component
    cardsInfo: {},
    // All other occurrances of the cardInfo card displayed within the grid
    subCollection: [],
}

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addToCardInfoTable: (state: cardsState, { payload }: PayloadAction<any>) => {
            let cardBundle: Card[] = payload.cardDataBundle;
            let cardsInfoTable: Card[][] = state.cardsInfoTable;

            if (cardBundle && cardBundle.length > 0) {
                if (cardsInfoTable[cardBundle[0].id] === undefined) {
                    cardsInfoTable[cardBundle[0].id] = cardBundle;
                }
            }

            cardsInfoTable[cardBundle[0].id].sort((a: Card, b: Card) => {
                return b.type - a.type
            })

            state.cardsInfoTable = cardsInfoTable;
            state.cardsInfo = cardsInfoTable[cardBundle[0].id][0];
            state.subCollection = cardsInfoTable[cardBundle[0].id];
        },
        newMainCard: (state: cardsState, { payload }: PayloadAction<any>) => {
            state.cardsInfo = payload.newCardInfo;
        }
    },
})

export const cardsReducer = cardsSlice.reducer;
export const { addToCardInfoTable, newMainCard } = cardsSlice.actions;