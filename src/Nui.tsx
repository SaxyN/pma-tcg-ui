import React, { ReactNode, useEffect } from "react";
import { useNuiRequest } from "fivem-nui-react-lib";
import { useDispatch } from "react-redux";
import { openBinder } from "./redux/binder/binder.slice";
import { openPack } from "./redux/pack/pack.slice"; 

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