import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockAllCards } from "../../mockData/mockAllCards";
import { CardShorthand, Card, CardBundle } from "../../models/CardModel";
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
            let current: Card = payload.current;
            let newCard: Card = payload.newCard;

            let subCollection = state.subCollection;
            let newCardInfo = state.cardInfo;

            subCollection.push(current);

            for (var i = 0; i < subCollection.length; i++) {
                if (newCard.uid === subCollection[i].uid) {
                    newCardInfo = subCollection[i];
                    subCollection.splice(i, 1);
                    break;
                }
            }

            state.cardInfo = newCardInfo;
            state.subCollection = subCollection;
        },
        openSpecificCard: (state: any, { payload }: PayloadAction<any>) => {
            let card = payload.specificCard;

            let newSubCollection: Card[] = [];
            let newCardInfo: Card;

            for (const key in card.uid) {
                newSubCollection.push({
                    uid: key,
                    id: card.id,
                    type: card.type,
                    img: card.img,
                    card_back: card.uid[key].back,
                    name: card.name,
                    set: card.set,
                    specialTag: card.specialTag,
                    holoX: card.uid[key].holoX,
                    holoY: card.uid[key].holoY,
                    pattern: card.uid[key].pattern,
                })
            }

            newCardInfo = newSubCollection[0];
            newSubCollection.splice(0, 1);

            state.cardInfo = newCardInfo;
            state.subCollection = newSubCollection;
        },
        updateCardInfo: (state: any, { payload }: PayloadAction<any>) => {
            // Get name/img/id (either/or but need two of them)

            let subCollection: CardBundle[] = [];
            let inventory = state.trueInventory

            // Search through inventory for any of this card of any type
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i].img === payload.img && inventory[i].name === payload.name) {
                    // Append the other occurances of this card to a sub array (This will displayed in the expanded info portion) 
                    subCollection.push(inventory[i]);
                }
            }

            // Sort by type (highest -> lowest)
            subCollection.sort((a: any, b: any) => {
                return b.type - a.type;
            })

            // Set the highest rarity as the main card
            state.cardInfo = subCollection[0];
            // Remove that card from the subCollection
            subCollection.shift();
            // Set subCollection
            state.subCollection = subCollection;

            // state.cardInfo = payload.cardInfo;
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
export const { showMissingCards, hideMissingCards, updateCardInfo, filterByID, filterByQuality, shiftCardInfo, filterByName, createInventory, loadAllCardsWithTypes, closeBinder, resetFilter, swapCardInfo, updateActiveCardProfile, openSpecificCard, openBinder, loadCardInventory, createMissingInventory, filterBySearch } = binderSlice.actions;