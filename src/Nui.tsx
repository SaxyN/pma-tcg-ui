import React, { ReactNode, useEffect } from "react";
import { useNuiRequest } from "fivem-nui-react-lib";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { openBinder } from "./redux/binder/binder.slice";
import { openPack } from "./redux/pack/pack.slice";
import * as storeActions from "./redux/cards/cards.slice";
import * as binderActions from "./redux/binder/binder.slice";
import { generatePack } from './cardpull/cardPuller';

// Mock Data for Dev
import { mockInventory } from "./mockData/mockInventory";
import { mockAllCards } from "./mockData/mockAllCards";

interface ProviderProps {
    children: ReactNode;
}

const Nui = ({ children }: ProviderProps) => {
    const dispatch = useDispatch();
    const Nui = useNuiRequest();
    const inventoryData = useSelector((state: RootStateOrAny) => state.cards.inventory);
    const collection = useSelector((state: RootStateOrAny) => state.cards.collection);
    const packs = useSelector((state: RootStateOrAny) => state.cards.packs);

    const handlePackOpen = (packData: any) => {
        let pack = generatePack(packData.type, packData.size, packData.set)
        dispatch(storeActions.loadNewPack(pack));
        dispatch(storeActions.updateCollection({ pack: pack, collection }));
        dispatch(storeActions.updateInventoryData({ pack: pack, inventoryData: inventoryData }))
        // dispatch(storeActions.updateInventoryData({ inventoryData: updateInven(pack, inventoryData) }))
        // setTimeout(() => {
        //     history.push(`${match.url}/packgenerate`);
        // }, 250);
    }

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
                if (process.env.NODE_ENV === "development") {
                    dispatch(binderActions.loadCardInventory({ inv: mockInventory, allCards: mockAllCards }))
                    dispatch(binderActions.createMissingInventory());
                }
                break;
            case "OPEN_PACK":
                dispatch(openPack());
                break;
            default:
                break;
        }
    };

    return <>{children}</>;
};

export default Nui;