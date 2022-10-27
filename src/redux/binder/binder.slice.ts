import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Card, CardMiniData } from "../../models/CardModel";
import { BinderSlot } from "../../models/BinderSlot";
import * as CardActions from '../cards/cards.slice';

interface binderState {
    binderVisible: boolean,
    cardInventory: BinderSlot[],
    trueInventory: Card[],
    shortInventory: CardMiniData[],
    allCards: CardMiniData[],
    paginationSize: number,

    showMissingCards: boolean,

    cardsInfoTable: Card[][],
    cardsInfo: Card | {},
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

    cardsInfoTable: [[]],
    cardsInfo: {},
    subCollection: [],
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        loadCardInventory: (state: binderState, { payload }: PayloadAction<any>) => {
            state.allCards = payload.allCards;
            let inventory: Card[] = payload.cardCollection;

            inventory.sort((a: CardMiniData, b: CardMiniData) => {
                return a.id - b.id;
            })

            state.trueInventory = inventory;


            let playerInventory: Card[] = inventory;
            let allCards: CardMiniData[] = payload.allCards;
            let finalInventory: BinderSlot[] = [];
            let cardsInfoTable: Card[][] = [[]];
            finalInventory.length = allCards.length;
            cardsInfoTable.length = allCards.length;

            playerInventory.sort((a: CardMiniData, b: CardMiniData) => {
                return a.id - b.id;
            })

            playerInventory.forEach((element: CardMiniData) => {
                if (finalInventory[element.id] === undefined) {
                    finalInventory[element.id] = { slotType: "owned", slotData: element };
                }
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

            allCards.forEach(element => {
                if (finalInventory[element.id].slotType === "undefined") {
                    finalInventory[element.id] = { slotType: "missing", slotData: element };
                } else if (finalInventory[element.id] === undefined) {
                    console.error("BAD SLOT AT " + element.id);
                }
            })

            playerInventory.forEach((element: Card) => {
                if (cardsInfoTable[element.id] === undefined) {
                    cardsInfoTable[element.id] = [element];
                } else {
                    cardsInfoTable[element.id].push(element);
                }
            })

            state.cardsInfoTable = cardsInfoTable;
            state.cardInventory = finalInventory;
            state.paginationSize = Math.ceil(finalInventory.length / 18);

        },
        newMainCard: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardsInfo = payload.newCardInfo;
        },
        getCardCollection: (state: binderState, { payload }: PayloadAction<any>) => {
            console.log(payload.id);
            state.subCollection = state.cardsInfoTable[payload.id].sort((a: Card, b: Card) => {
                return b.type - a.type;
            });
            state.cardsInfo = state.subCollection[0];
        },
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
            state.cardsInfo = payload.newCardInfo;
            state.subCollection = payload.newSubCollection;
        },
        showCardInfo: (state: binderState, { payload }: PayloadAction<any>) => {
            // Get name/img/id (either/or but need two of them)

            let subCollection: Card[] = payload.cardData;

            // Sort by type (highest -> lowest)
            subCollection.sort((a: Card, b: Card) => {
                return b.type - a.type;
            })

            state.cardsInfo = subCollection[0];
            state.subCollection = subCollection;

            // state.cardInfo = payload.cardInfo;
        },
        checkCollection: (state: binderState, { payload }: PayloadAction<any>) => {
            let cardInventory = state.cardInventory;
            let cardsInfoTable: Card[][] = state.cardsInfoTable;
            let packCards = payload.packCards;
            packCards.forEach((element: Card) => {
                if (cardInventory[element.id].slotType === "missing") {
                    cardInventory[element.id].slotType = "owned";
                    cardInventory[element.id].slotData = {
                        img: element.img,
                        id: element.id,
                        name: element.name,
                        type: element.type,
                        set: element.set,
                    };
                }

                if (cardsInfoTable[element.id] === undefined) {
                    cardsInfoTable[element.id] = [element];
                } else {
                    cardsInfoTable[element.id].push(element);
                }
            })

            state.cardInventory = cardInventory;
        },
        updateCardInfo: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardsInfo = payload.newCardInfo;
        },
        clearShowCardData: (state: binderState, { payload }: PayloadAction<any>) => {
            state.cardsInfo = {
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
export const {
    loadCardInventory,
    newMainCard,
    getCardCollection,
    showMissingCards,
    hideMissingCards,
    updateCardInfo,
    filterByID,
    filterByQuality,
    filterByName,
    closeBinder,
    clearShowCardData,
    resetFilter,
    swapCardInfo,
    openBinder,
    showCardInfo,
    filterBySearch,
    checkCollection
} = binderSlice.actions;