class CardList {
    list: Card[] = [];

    set appendCard(newCard: Card) {
        this.list.push(newCard);
    }

    public sortByID(): void {
        this.list.sort((a: any, b: any) => {
            if (a.id === b.id) {
                return b.type - a.type;
            }
            return a.id - b.id;
        })
    }
}

class Card {
    count: number = 1;
    uid: string = "";
    id: number = -1;
    type: number = 0;
    img: string = "";
    name: string = "";
    set: string = "";
    specialTag: string = "";
    tradable: boolean = false;
    liked: boolean = false;

    constructor(
        uid: string, id: number, type: number, img: string, name: string,
        set: string, specialTag: string, tradable: boolean, liked: boolean
    ) {
        this.uid = uid;
        this.id = id;
        this.type = type;
        this.img = img;
        this.name = name;
        this.set = set;
        this.specialTag = specialTag;
        this.tradable = tradable;
        this.liked = liked;
    }

    public set updateCount(newCount: number) {
        this.count = newCount;
    }

    public set updateLike(likeSet: boolean) {
        this.liked = likeSet;
    }
}

class CollectionCard {
    uid: string = "";
    id: number = -1;
    type: number = 0;
    img: string = "";
    name: string = "";
    set: string = "";
    specialTag: string = "";
    tradable: boolean = false;
    liked: boolean = false;

    constructor(
        uid: string, id: number, type: number,
        img: string, name: string, set: string, specialTag: string, tradable: boolean,
        liked: boolean
    ) {
        this.uid = uid;
        this.id = id;
        this.type = type;
        this.img = img;
        this.name = name;
        this.set = set;
        this.specialTag = specialTag;
        this.tradable = tradable;
        this.liked = liked;
    }
}

export { Card, CardList };