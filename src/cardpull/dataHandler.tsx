import CardData from "./chances.json";
import { Card, CardList } from "../Classes/CardClass";

/**
 * 
 * @param cardData Object containing new card data
 * @param uid Passed if the card is part of the allCardList
 * @returns New card to be thrown to CardList.appendCard method
 */
export function makeNoIDCard(cardData: any, uid: string) {
    return new Card(uid, cardData.id, cardData.type, cardData.img, cardData.name, cardData.set, cardData.specialTag, cardData.tradable, cardData.liked);
}

export function makeGreyIDCard(cardData: any, uid: string) {
    return new Card(uid, cardData.id, -1, cardData.img, cardData.name, cardData.set, cardData.specialTag, cardData.tradable, cardData.liked);
}

function getNormalCards() {
    return CardData.normal_cards;
}
function getFullArtCards() {
    return CardData.full_art_cards;
}
function getGoldCards() {
    return CardData.gold_cards;
}
function getBlackPearlCards() {
    return CardData.black_pearl_cards;
}
function getRainbowCards() {
    return CardData.rainbow_cards;
}

export function buildAllCards() {
    let normalCards = getNormalCards();
    let fullArtCards = getFullArtCards();
    let goldCards = getGoldCards();
    let blackPearlCards = getBlackPearlCards();
    let rainbowCards = getRainbowCards();

    let allCards = new CardList();

    for (var i = 0; i < CardData.all_cards.length; i++) {
        // allCards.appendCard = makeNoIDCard(CardData.all_cards[i], "")
        allCards.appendCard = new Card("", CardData.all_cards[i].id, CardData.all_cards[i].type, CardData.all_cards[i].img, CardData.all_cards[i].name, CardData.all_cards[i].set, CardData.all_cards[i].specialTag, CardData.all_cards[i].tradable, CardData.all_cards[i].liked);
    }

    // return allCards;
    return allCards;
}