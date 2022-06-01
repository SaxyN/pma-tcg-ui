import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockAllCards } from "../../mockData/mockAllCards";
import { Card } from "../../models/CardModel";
import { BinderSlot } from "../../models/BinderSlot";

const initialState = {
    binderVisible: false,
    activeCardProfile: null,
    cardInventory: [],
    trueInventory: [],
    allCards: [],
    filters: "",
    showMissingCards: false,
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        createCardProfile: (state: any, { payload }: PayloadAction<any>) => {

        },
        updateActiveCardProfile: (state: any, { payload }: PayloadAction<any>) => {

        },
        openBinder: (state: any) => {
            state.binderVisible = true;
        },
        loadCardInventory: (state: { trueInventory: any; allCards: any }, { payload }: PayloadAction<any>) => {
            state.trueInventory = payload.inv;
            state.allCards = payload.allCards;
        },
        createInventory: (state: { cardInventory: any; }, { payload }: PayloadAction<any>) => {
            state.cardInventory = payload.plyInventory;
        },
        createMissingInventory: (state: any) => {
            let playerInventory = state.trueInventory;
            let allCards = state.allCards;
            let finalInventory: BinderSlot[] = [];
            let foundCard = false;
            for (var i = 0; i < allCards.length; i++) {
                for (var j = 0; j < playerInventory.length; j++) {
                    if (playerInventory[j].img === allCards[i].img) {
                        finalInventory.push({ slotType: "owned", slotData: playerInventory[j] });
                        foundCard = true;
                    }
                }
                if (!foundCard) {
                    finalInventory.push({ slotType: "missing", slotData: allCards[i] });
                } else {
                    foundCard = false;
                }
            }
            console.log(finalInventory);
            state.cardInventory = finalInventory;
        },
        filterBySearch: (state: any, { payload }: PayloadAction<any>) => {
            let searchString = payload.searchParameter;
            let plyInventory = payload.plyInventory;

            let filteredInventory: BinderSlot[] = [];

            for (var i = 0; i < plyInventory.length; i++) {
                console.log(plyInventory[i].name);
                let cardName: string = plyInventory[i].name
                if (cardName.toLowerCase().includes(searchString.toLowerCase())) {
                    filteredInventory.push({ slotType: "owned", slotData: plyInventory[i] })
                }
            }

            state.cardInventory = filteredInventory;

        },
        resetFilter: (state: any, { payload }: PayloadAction<any>) => {
        }
    }
})

export const binderReducer = binderSlice.reducer;
export const { resetFilter, createCardProfile, updateActiveCardProfile, openBinder, loadCardInventory, createMissingInventory, filterBySearch } = binderSlice.actions;