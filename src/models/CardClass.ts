export interface Card {
    uid: string,
    id: number,
    type: number,
    img: string,
    name: string,
    set: string,
    specialTag: string,
    tradable: boolean,
    like: boolean,
    condition: Qualities,
    quality: number,
}

export interface Qualities {
    centering: number,
    corners: number,
    edges: number,
    face: number,
}