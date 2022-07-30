import { CardMiniData } from "../models/CardModel";

export interface BinderSlot {
    slotType: string,
    slotData: CardMiniData | {},
}