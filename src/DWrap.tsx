import React, { ReactNode, useEffect } from 'react';
import showBinderJson from "./assets/json/showBinder.json";

interface WrapperProps {
    children: ReactNode;
}

export const DWrap = ({ children }: WrapperProps) => {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            window.postMessage(showBinderJson);
        }
    }, [])
    return <>{children}</>
}