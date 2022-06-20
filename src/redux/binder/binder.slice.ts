import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockAllCards } from "../../mockData/mockAllCards";
import { CardShorthand } from "../../models/CardModel";
import { BinderSlot } from "../../models/BinderSlot";

const initialState = {
    binderVisible: false,
    activeCardProfile: null,
    cardInventory: [], // Inventory that is shown on the screen
    trueInventory: [], // True Inventory that is passed to the UI from game
    shortInventory: [],
    allCardsWithTypes: [], // All existing cards with types attached
    allCards: [], // All existing cards without types attached
    filters: "", // Search string for filtering cardInventory
    showMissingCards: false,

    cardInfo: [],
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        closeBinder: (state: any) => {
            state.binderVisible = false;
        },
        createCardProfile: (state: any, { payload }: PayloadAction<any>) => {

        },
        updateActiveCardProfile: (state: any, { payload }: PayloadAction<any>) => {

        },
        openBinder: (state: any) => {
            state.binderVisible = true;
        },
        loadAllCardsWithTypes: (state: { allCardsWithTypes: any }, { payload }: PayloadAction<any>) => {
            state.allCardsWithTypes = payload.allCardsWithTypes;
        },
        loadCardInventory: (state: { trueInventory: any; allCards: any, shortInventory: any }, { payload }: PayloadAction<any>) => {
            state.trueInventory = payload.cardCollection;
            state.allCards = payload.allCards;
            var collection = payload.cardCollection;
            var inventory: CardShorthand[] = [];

            let needToAdd: boolean = true;
            for (var i = 0; i < collection.length; i++) {
                for (var j = 0; j < inventory.length; j++) {
                    if (collection[i].img === inventory[j].img && collection[i].name === inventory[j].name) {
                        needToAdd = false;
                        if (collection[i].type > inventory[j].type) {
                            inventory[j] = collection[i];
                        }
                    }
                }

                if (needToAdd) {
                    inventory.push(collection[i]);
                } else {
                    needToAdd = true;
                }
            }

            inventory.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            })

            state.shortInventory = inventory;
        },
        createInventory: (state: { cardInventory: any; }, { payload }: PayloadAction<any>) => {
            state.cardInventory = payload.plyInventory;
        },
        createMissingInventory: (state: any) => {
            let playerInventory = state.shortInventory;
            let allCards = state.allCards;
            let finalInventory: BinderSlot[] = [];
            let foundCard = false;
            for (var i = 0; i < allCards.length; i++) {
                for (var j = 0; j < playerInventory.length; j++) {
                    if (playerInventory[j].img === allCards[i].img && playerInventory[j].name === allCards[i].name) {
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
        filterByID: (state: any) => {
            let inv = state.shortInventory;
            let filteredInventory: BinderSlot[] = [];

            inv.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            });

            for (var i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.cardInventory = filteredInventory;

        },
        filterByName: (state: any) => {
            let inv = state.shortInventory;
            let filteredInventory: BinderSlot[] = [];

            inv.sort((a: any, b: any) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            for (var i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.cardInventory = filteredInventory;
        },
        filterByQuality: (state: any) => {
            let inv = state.shortInventory;
            let filteredInventory: BinderSlot[] = [];

            inv.sort((a: any, b: any) => {
                return b.type - a.type;
            });

            for (var i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.cardInventory = filteredInventory;
        },
        resetFilter: (state: any, { payload }: PayloadAction<any>) => {
        }
    }
})

export const binderReducer = binderSlice.reducer;
export const { filterByID, filterByQuality, filterByName, loadAllCardsWithTypes, closeBinder, resetFilter, createCardProfile, updateActiveCardProfile, openBinder, loadCardInventory, createMissingInventory, filterBySearch } = binderSlice.actions;