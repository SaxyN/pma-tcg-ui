import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockAllCards } from "../../mockData/mockAllCards";
import { CardShorthand, Card, CardBundle, CardMiniData } from "../../models/CardModel";
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
    paginationSize: 1,

    cardInfo: {},
    subCollection: [],
}

export const binderSlice = createSlice({
    name: "binder",
    initialState,
    reducers: {
        closeBinder: (state: any) => {
            state.binderVisible = false;
        },
        hideMissingCards: (state: { showMissingCards: boolean }) => {
            state.showMissingCards = false;
        },
        showMissingCards: (state: { showMissingCards: boolean }) => {
            state.showMissingCards = true;
        },
        swapCardInfo: (state: any, { payload }: PayloadAction<any>) => {
            // let current: Card = payload.current;
            // let newCard: Card = payload.newCard;

            // let subCollection = state.subCollection;
            // let newCardInfo = state.cardInfo;

            // subCollection.push(current);

            // for (var i = 0; i < subCollection.length; i++) {
            //     if (newCard.uid === subCollection[i].uid) {
            //         newCardInfo = subCollection[i];
            //         subCollection.splice(i, 1);
            //         break;
            //     }
            // }
            // let newSubCollection = subCollection;

            state.cardInfo = payload.newCardInfo;
            state.subCollection = payload.newSubCollection;
        },
        extractInventory: (state: any, { payload }: PayloadAction<any>) => {
            let subCollection: Card[] = [];
            let inventory = state.trueInventory;

            // Search through inventory for any of this card of any type
            for (var i = 0; i < inventory.length; i++) {
                for (const key in inventory[i].uid) {
                    subCollection.push({
                        uid: key,
                        id: inventory[i].id,
                        type: inventory[i].type,
                        img: inventory[i].img,
                        card_back: inventory[i].uid[key].back,
                        name: inventory[i].name,
                        set: inventory[i].set,
                        specialTag: inventory[i].specialTag,
                        holoX: inventory[i].uid[key].holoX,
                        holoY: inventory[i].uid[key].holoY,
                        pattern: inventory[i].uid[key].pattern,
                        like: inventory[i].uid[key].like,
                        forTrade: inventory[i].uid[key].forTrade,
                    })
                }
            }

            // Sort by type (highest -> lowest)
            subCollection.sort((a: any, b: any) => {
                return b.type - a.type;
            })

            state.subCollection = subCollection;
        },
        showCardInfo: (state: any, { payload }: PayloadAction<any>) => {
            // Get name/img/id (either/or but need two of them)

            let subCollection: Card[] = payload.cardData;

            // Sort by type (highest -> lowest)
            subCollection.sort((a: any, b: any) => {
                return b.type - a.type;
            })

            state.cardInfo = subCollection[0];
            state.subCollection = subCollection;

            // state.cardInfo = payload.cardInfo;
        },
        updateCardInfo: (state: any, { payload }: PayloadAction<any>) => {
            // Get name/img/id (either/or but need two of them)

            state.cardInfo = payload.newCardInfo;
        },
        shiftCardInfo: (state: any, { payload }: PayloadAction<any>) => {
            let newCardType = payload.newType;
            let subCollection = state.subCollection

            subCollection.push(state.cardInfo);

            for (var i = 0; i < subCollection.length; i++) {
                if (newCardType === subCollection[i].type) {
                    state.cardInfo = subCollection[i]
                    subCollection.splice(i, 1);
                    break;
                }
            }

            subCollection.sort((a: any, b: any) => {
                return b.type - a.type;
            })

            state.subCollection = subCollection;

        },
        clearShowCardData: (state: any, { payload }: PayloadAction<any>) => {
            state.cardInfo = {};
            state.subCollection = [];
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
            state.allCards = payload.allCards;
            var inventory: CardMiniData[] = payload.cardCollection;

            inventory.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            })

            state.trueInventory = inventory;
            state.shortInventory = inventory;
        },
        createInventory: (state: { cardInventory: any, shortInventory: any, paginationSize: number }) => {
            let playerInventory = state.shortInventory;
            let finalInventory: BinderSlot[] = [];

            playerInventory.sort((a: any, b: any) => {
                return a.id - b.id;
            })

            for (var i = 0; i < playerInventory.length; i++) {
                finalInventory.push({ slotType: "owned", slotData: playerInventory[i] })
            }


            state.cardInventory = finalInventory;
            state.paginationSize = Math.ceil(finalInventory.length / 18);
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
            state.paginationSize = Math.ceil(finalInventory.length / 18);
        },
        filterBySearch: (state: any, { payload }: PayloadAction<any>) => {
            let searchString = payload.searchParameter;
            let plyInventory = payload.plyInventory;

            let filteredInventory: BinderSlot[] = [];

            for (var i = 0; i < plyInventory.length; i++) {
                let cardName: string = plyInventory[i].name
                if (cardName.toLowerCase().includes(searchString.toLowerCase())) {
                    filteredInventory.push({ slotType: "owned", slotData: plyInventory[i] })
                }
            }

            state.cardInventory = filteredInventory;
            state.paginationSize = Math.ceil(filteredInventory.length / 18);

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
            state.paginationSize = Math.ceil(filteredInventory.length / 18);

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
            state.paginationSize = Math.ceil(filteredInventory.length / 18);
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
            state.paginationSize = Math.ceil(filteredInventory.length / 18);
        },
        resetFilter: (state: any) => {
        }
    }
})

export const binderReducer = binderSlice.reducer;
export const { extractInventory, showMissingCards, hideMissingCards, updateCardInfo, filterByID, filterByQuality, shiftCardInfo, filterByName, createInventory, loadAllCardsWithTypes, closeBinder, clearShowCardData, resetFilter, swapCardInfo, updateActiveCardProfile, openBinder, loadCardInventory, showCardInfo, createMissingInventory, filterBySearch } = binderSlice.actions;