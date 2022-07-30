import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Card, CardMiniData } from "../../models/CardModel";
import { BinderSlot } from "../../models/BinderSlot";

interface binderState {
    binderVisible: boolean,
    cardInventory: BinderSlot[],
    trueInventory: CardMiniData[],
    shortInventory: CardMiniData[],
    allCards: CardMiniData[],
    paginationSize: number,

    showMissingCards: boolean,

    cardInfo: Card | {},
    subCollection: Card[],
}

const initialState: binderState = {
    binderVisible: false,
    cardInventory: [], // Inventory that is shown on the screen
    trueInventory: [], // True Inventory that is passed to the UI from game
    shortInventory: [],
    allCards: [], // All existing cards without types attached
    showMissingCards: true,
    paginationSize: 1,

    cardInfo: {},
    subCollection: [],
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        closeBinder: (state: binderState) => {
            state.binderVisible = false;
        },
        hideMissingCards: (state: binderState) => {
            state.showMissingCards = false;
        },
        showMissingCards: (state: binderState) => {
            state.showMissingCards = true;
        },
        swapCardInfo: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardInfo = payload.newCardInfo;
            state.subCollection = payload.newSubCollection;
        },
        showCardInfo: (state: binderState, { payload }: PayloadAction<any>) => {
            // Get name/img/id (either/or but need two of them)

            let subCollection: Card[] = payload.cardData;

            // Sort by type (highest -> lowest)
            subCollection.sort((a: Card, b: Card) => {
                return b.type - a.type;
            })

            state.cardInfo = subCollection[0];
            state.subCollection = subCollection;

            // state.cardInfo = payload.cardInfo;
        },
        updateCardInfo: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardInfo = payload.newCardInfo;
        },
        clearShowCardData: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardInfo = {
                img: "",
                id: -1,
                name: "",
                type: -1,
                set: "",
            };
            state.subCollection = [];
        },
        openBinder: (state: any) => {
            state.binderVisible = true;
        },
        loadCardInventory: (state: binderState, { payload }: PayloadAction<any>) => {
            state.allCards = payload.allCards;
            let inventory: CardMiniData[] = payload.cardCollection;

            inventory.sort((a: CardMiniData, b: CardMiniData) => {
                return a.id - b.id;
            })

            state.trueInventory = inventory;
            state.shortInventory = inventory;
        },
        createInventory: (state: binderState) => {
            let playerInventory = state.shortInventory;
            let allCards = state.allCards;
            let finalInventory: BinderSlot[] = [];
            finalInventory.length = state.allCards.length;

            playerInventory.sort((a: CardMiniData, b: CardMiniData) => {
                return a.id - b.id;
            })

            playerInventory.forEach((element: CardMiniData) => {
                finalInventory[element.id] = { slotType: "owned", slotData: element };
            });

            allCards.forEach(element => {
                if (finalInventory[element.id] === undefined) {
                    finalInventory[element.id] = { slotType: "missing", slotData: element };
                }
            })

            for (let i = 0; i < finalInventory.length; i++) {
                if (finalInventory[i] === undefined) {
                    finalInventory[i] = {
                        slotType: "undefined",
                        slotData: {
                            img: "",
                            id: -1,
                            name: "",
                            type: -1,
                            set: "",
                        }
                    };
                }
            }
            console.log(finalInventory);
            state.cardInventory = finalInventory;
            state.paginationSize = Math.ceil(finalInventory.length / 18);
        },
        createMissingInventory: (state: binderState) => {
            let finalInventory: BinderSlot[] = [];
            let playerInventory = state.cardInventory;
            let allCards = state.allCards;
            allCards.forEach(element => {
                if (playerInventory[element.id].slotType === "undefined") {
                    playerInventory[element.id] = { slotType: "missing", slotData: element };
                } else if (playerInventory[element.id] === undefined) {
                    console.error("BAD SLOT AT " + element.id);
                }
            })
            finalInventory = playerInventory;
            state.cardInventory = playerInventory;
            state.paginationSize = Math.ceil(playerInventory.length / 18);
        },
        filterBySearch: (state: binderState, { payload }: PayloadAction<any>) => {
            let searchString = payload.searchParameter;
            let plyInventory = payload.plyInventory;

            let filteredInventory: BinderSlot[] = [];

            for (let i = 0; i < plyInventory.length; i++) {
                let cardName: string = plyInventory[i].name
                if (cardName.toLowerCase().includes(searchString.toLowerCase())) {
                    filteredInventory.push({ slotType: "owned", slotData: plyInventory[i] })
                }
            }

            state.cardInventory = filteredInventory;
            state.paginationSize = Math.ceil(filteredInventory.length / 18);

        },
        filterByID: (state: binderState) => {
            let inv = state.shortInventory;
            let filteredInventory: BinderSlot[] = [];

            inv.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            });

            for (let i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.showMissingCards = false;
            state.cardInventory = filteredInventory;
            state.paginationSize = Math.ceil(filteredInventory.length / 18);

        },
        filterByName: (state: binderState) => {
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

            for (let i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.showMissingCards = false;
            state.cardInventory = filteredInventory;
            state.paginationSize = Math.ceil(filteredInventory.length / 18);
        },
        filterByQuality: (state: binderState) => {
            let inv = state.shortInventory;
            let filteredInventory: BinderSlot[] = [];

            inv.sort((a: any, b: any) => {
                return b.type - a.type;
            });

            for (let i = 0; i < inv.length; i++) {
                filteredInventory.push({ slotType: 'owned', slotData: inv[i] })
            }

            state.showMissingCards = false;
            state.cardInventory = filteredInventory;
            state.paginationSize = Math.ceil(filteredInventory.length / 18);
        },
        resetFilter: (state: binderState) => {
            state.showMissingCards = false;
        }
    }
})

export const binderReducer = binderSlice.reducer;
export const { showMissingCards, hideMissingCards, updateCardInfo, filterByID, filterByQuality, filterByName, createInventory, closeBinder, clearShowCardData, resetFilter, swapCardInfo, openBinder, loadCardInventory, showCardInfo, createMissingInventory, filterBySearch } = binderSlice.actions;