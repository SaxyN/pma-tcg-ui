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
    specialTag: string,
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