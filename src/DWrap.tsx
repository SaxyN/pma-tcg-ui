import React, { ReactNode, useEffect } from 'react';
import showBinderJson from "./assets/json/showBinder.json";
import showPackJson from "./assets/json/showPack.json";
import loadAllWTypes from "./assets/json/showAllWTypes.json";
import showPresentJson from "./assets/json/showPresent.json";

interface WrapperProps {
    children: ReactNode;
}

export const DWrap = ({ children }: WrapperProps) => {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            window.postMessage(showBinderJson);
            // window.postMessage(showPackJson);
            // window.postMessage(showPresentJson);
        }
    }, [])
    return <>{children}</>
}