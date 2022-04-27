import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardList } from "../../Classes/CardClass";
import { makeGreyIDCard } from "../../cardpull/dataHandler";
import { generateDisplayID } from "../../cardpull/cardPuller";
// import { generateUniqueID, globalUniqueKeySize } from "../cardpull/cardPuller";

const initialState = {
    message: "Hello There!",
    pack: [],
    packs: [
        {
            "name": "1st Edition Pack",
            "description": "6 Card Pack",
            "image": "pack_design3",
            "size": 6,
            "type": "standard",
            "set": "1A"
        },
        {
            "name": "Staff Pack",
            "description": "Epic Card Guanteed",
            "image": "pack_design2",
            "size": 6,
            "type": "rainbow",
            "set": "1A"
        }
    ],
    inventory: new CardList(),
    collection: new CardList(),
    all_cards: new CardList(),
    special_inventory: new CardList(),
    info_inventory: new CardList(),
}

// function makeNewCard(uid: string, id: number, type: number, img: string,
//     name: string, set: string, specialTag: string, tradable: boolean, liked: boolean) {
//     return new Card(uid, id, type, img, name, set, specialTag, tradable, liked);
// }

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        updateMessage: (state, { payload }: PayloadAction<any>) => {
            state.message = payload;
        },
        updateInventory: (state, { payload }: PayloadAction<any>) => {
            state.inventory = payload;
        },
        loadNewPack: (state, { payload }: PayloadAction<any>) => {
            state.pack = payload;
        },
        updateInventoryData: (state, { payload }: PayloadAction<any>) => {
            var inventoryData = payload.inventoryData;
            const pack = payload.pack;
            var needToAdd: boolean = true;
            for (var i: number = 0; i < pack.length; i++) {
                for (var j: number = 0; j < inventoryData.list.length; j++) {
                    if (pack[i].id === inventoryData.list[j].id && pack[i].type === inventoryData.list[j].type) {
                        needToAdd = false
                        inventoryData.list[j].updateCount = inventoryData.list[j].count + 1;
                    }
                }
                if (needToAdd) {
                    inventoryData.appendCard = new Card(pack[i].uid, pack[i].id, pack[i].type, pack[i].img, pack[i].name, pack[i].set, pack[i].specialTag, pack[i].tradable, pack[i].liked);
                } else {
                    needToAdd = true
                }
            }

            inventoryData.list.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            });
            state.inventory = inventoryData;
        },
        updateCollection: (state, { payload }: PayloadAction<any>) => {
            var collection = payload.collection
            const pack = payload.pack
            for (var i: number = 0; i < pack.length; i++) {
                collection.appendCard = new Card(pack[i].uid, pack[i].id, pack[i].type, pack[i].img, pack[i].name, pack[i].set, pack[i].specialTag, false, false);
            }

            collection.list.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            });

            state.collection = collection;
        },
        updateCardLike: (state, { payload }: PayloadAction<any>) => {
            var cardID = payload.cardID;
            const inventory = payload.inventory;
            for (var i = 0; i < inventory.list.length; i++) {
                if (cardID === inventory.list[i].uid) {
                    inventory.list[i].updateLike = !inventory.list[i].liked;
                }
            }
            state.inventory = inventory
        },
        sortInventoryByCount: (state, { payload }: PayloadAction<any>) => {
            let inv = payload.inventory;

            inv.list.sort((a: any, b: any) => {
                return b.count - a.count
            });

            inv = Object.assign(new CardList(), inv);

            state.inventory = inv;
        },
        sortInventoryByID: (state, { payload }: PayloadAction<any>) => {
            let inv = payload.inventory;

            inv.list.sort((a: any, b: any) => {
                if (a.id === b.id) {
                    return b.type - a.type;
                }
                return a.id - b.id;
            });

            inv = Object.assign(new CardList(), inv);

            state.inventory = inv;
        },
        sortInventoryByName: (state, { payload }: PayloadAction<any>) => {
            let inv = payload.inventory;

            inv.list.sort((a: any, b: any) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            inv = Object.assign(new CardList(), inv);

            state.inventory = inv;
        },
        sortInventoryByType: (state, { payload }: PayloadAction<any>) => {
            let inv = payload.inventory;

            inv.list.sort((a: any, b: any) => {
                return b.type - a.type;
            });

            inv = Object.assign(new CardList(), inv);

            state.inventory = inv;
        },
        updateAllCardsList: (state, { payload }: PayloadAction<any>) => {
            let allCards = payload.allCards;

            allCards = Object.assign(new CardList(), allCards);

            state.all_cards = allCards;
        },
        updateSpecialInventory: (state, { payload }: PayloadAction<any>) => {

            state.special_inventory = payload.specialInventory
        },
        updateInfoInventory: (state, { payload }: PayloadAction<any>) => {
            let cardData = payload.cardData;
            let inventory = payload.inventory;
            let allCards = payload.allCards;

            let infoInventory = new CardList();

            for (var i = 0; i < inventory.list.length; i++) {
                if (cardData.id === inventory.list[i].id) {
                    infoInventory.appendCard = inventory.list[i];
                }
            }

            var needGrey = true;
            for (var i = 0; i < allCards.list.length; i++) {
                if (cardData.id === allCards.list[i].id) {
                    for (var j = 0; j < infoInventory.list.length; j++) {
                        if (infoInventory.list[j].type === allCards.list[i].type) {
                            needGrey = false;
                        }
                    }

                    if (needGrey) {
                        infoInventory.appendCard = makeGreyIDCard(allCards.list[i], generateDisplayID(15))
                    } else {
                        needGrey = true
                    }
                }
            }

            infoInventory.list.sort((a: any, b: any) => {
                return b.type - a.type;
            });

            state.info_inventory = infoInventory;
        },
        resetInfoInventory: (state, { payload }: PayloadAction<any>) => {
            state.info_inventory = new CardList();
        }
    }
})

export const cardsReducer = cardsSlice.reducer
export const {
    updateMessage, updateInventory, loadNewPack,
    updateInventoryData, updateCollection, updateCardLike,
    sortInventoryByCount, sortInventoryByID, sortInventoryByName, sortInventoryByType,
    updateAllCardsList, updateInfoInventory, resetInfoInventory
} = cardsSlice.actions;