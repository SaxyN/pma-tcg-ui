import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
    children: ReactNode;
}

const PackNui = ({ children }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("message", eventListener);
        return () => {
            return window.removeEventListener("message", eventListener);
        };
    }, []);

    const eventListener = (event: any) => {
        switch (event.data.type) {
            default:
                break;
        }

    };

    return <>{children}</>;
};
export default PackNui;