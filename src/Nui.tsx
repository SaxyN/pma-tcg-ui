import React, { ReactNode, useEffect } from "react";
import { useNuiRequest } from "fivem-nui-react-lib";
import { useDispatch } from "react-redux";
import { openBinder } from "./redux/binder/binder.slice";
import { openPack, updatePackCards } from "./redux/pack/pack.slice";
import * as binderActions from "./redux/binder/binder.slice";
import * as showcaseActions from "./redux/showcase/showcase.slice";

// Mock Data for Dev
import { mockInventory } from "./mockData/mockInventory";
import { mockAllCardsWithTypes } from "./mockData/mockAllCardsWithTypes";
import { mockAllCards } from "./mockData/mockAllCards";
import { CardList } from "./mockData/mock";
import { mockShowcase } from "./mockData/mockShowcase";

interface ProviderProps {
    children: ReactNode;
}

const Nui = ({ children }: ProviderProps) => {
    const dispatch = useDispatch();
    const Nui = useNuiRequest();

    useEffect(() => {
        window.addEventListener("message", eventListener);
        return () => {
            return window.removeEventListener("message", eventListener);
        };
    }, []);

    const eventListener = (event: any) => {
        switch (event.data.type) {
            case "OPEN_BINDER":
                dispatch(openBinder());
                if (process.env.NODE_ENV !== "development") {
                    dispatch(binderActions.loadCardInventory({ cardCollection: event.data.cardCollection, allCards: event.data.allCards }))
                    dispatch(binderActions.createInventory());
                } else {
                    dispatch(binderActions.loadCardInventory({ cardCollection: mockInventory, allCards: mockAllCards }))
                    dispatch(binderActions.loadAllCardsWithTypes({ allCardsWithTypes: mockAllCardsWithTypes }));
                    dispatch(binderActions.createInventory());
                }
                break;
            case "OPEN_PACK":
                if (process.env.NODE_ENV !== "development") {
                    dispatch(updatePackCards({ packCards: event.data.packCards }))
                } else {
                    dispatch(updatePackCards({ packCards: CardList }));
                }
                dispatch(openPack());
                break;
            case "LOAD_ALL_W_TYPES":
                dispatch(binderActions.loadAllCardsWithTypes({ allCardsWithTypes: event.data.allCardsWithTypes }))
                break;
            case "OPEN_SHOWCASE":
                if (process.env.NODE_ENV !== "development") {
                    dispatch(showcaseActions.openShowcase());
                    dispatch(showcaseActions.updateShowcase({ showcaseData: event.data.showcaseCard }));
                } else {
                    dispatch(showcaseActions.openShowcase());
                    dispatch(showcaseActions.updateShowcase({ showcaseData: mockShowcase }));
                }
                break;
            case "SEND_CARD_DATA":
                if (process.env.NODE_ENV !== "development") {
                    dispatch(binderActions.showCardInfo({ cardData: event.data.cardDataBundle }));
                } else {

                }
                break;
            // case "OPEN_TRADING":
            //     if (process.env.NODE_ENV !== "development") {
            //         dispatch(tradingActions.openTrading());
            //         dispatch(tradingActions.updateTrade({ tradeData: event.data.tradeData }));
            //     } else {
            //         dispatch(binderActions.loadCardInventory({ cardCollection: mockInventory, allCards: mockAllCards }))
            //         dispatch(binderActions.loadAllCardsWithTypes({ allCardsWithTypes: mockAllCardsWithTypes }));
            //         dispatch(binderActions.createInventory());
            //         dispatch(tradingActions.openTrading());
            //         dispatch(tradingActions.updateTrade({ tradeData: mockTradeData }));
            //     }
            //     break;
            default:
                break;
        }
    };

    return <>{children}</>;
};

export default Nui;