export interface CardDataDictionary {
    [index: string]: {
        back: string,
        holoX?: string,
        holoY?: string,
        pattern?: string,
        like: boolean,
        forTrade: boolean,
    };
}

// THIS IS THE NEW CARD BINDERS TABLE DATASET
export interface CardMiniData {
    img: string,
    id: number,
    name: string,
    type?: number,
    set: string,
}

// THIS IS THE NEW CARD DATA TABLE DATASET
export interface CardMetaData {
    uid: string,
    back: string,
    type: number,
    holoX?: string,
    holoY?: string,
    pattern?: string,
}

// export interface CardData {
//     back: string,
//     holoX?: string,
//     holoY?: string,
//     pattern?: string,
//     like?: boolean,
// }

export interface PullCard {
    id: number,
    img: string,
    name: string,
    set: string,
    pattern: string,
}

export interface Card {
    uid: string,
    id: number,
    type: number,
    img: string,
    card_back: string,
    name: string,
    set: string,
    specialTag: string,
    holoX: string,
    holoY: string,
    pattern: string,
    like: boolean,
    forTrade: boolean,
    // condition: Qualities,
    // quality: number,
    // width: string, height: string, borderRadius: string,
}

export interface CardBundle {
    uid: CardDataDictionary,
    count: number,
    id: number,
    img: string,
    type: number,
    name: string,
    set: string,
    specialTag: string,
}

export interface CardShorthand {
    id: number,
    type: number,
    img: string,
    name: string,
    set: string,
    specialTag: string,
}