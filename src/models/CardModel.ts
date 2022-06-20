export interface CardDataDictionary {
    [index: string]: {
        back: string,
        holoX?: string,
        holoY?: string,
        pattern?: string,
    };
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
    like?: boolean,
    holoX?: string,
    holoY?: string,
    pattern?: string,
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

export interface Qualities {
    centering: number,
    corners: number,
    edges: number,
    face: number,
}