import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
    children: ReactNode;
}

const ShowcaseNui = ({ children }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("message", eventListener);
        return () => {
            return window.removeEventListener("message", eventListener);
        }
    }, []);

    const eventListener = (event: any) => {
        switch (event.data.type) {
            default:
                break;
        }
    }

    return <>{children}</>
}

export default ShowcaseNui;