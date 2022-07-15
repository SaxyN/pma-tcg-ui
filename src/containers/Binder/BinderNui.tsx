import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardShorthand } from '../../models/CardModel';
import * as BinderActions from '../../redux/binder/binder.slice';

interface Props {
    children: ReactNode;
}

const BinderNui = ({ children }: Props) => {
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

    const handleCardShift = (newCard: CardShorthand) => {
        dispatch(BinderActions.shiftCardInfo({ newCard: newCard }))
    }

    return <>{children}</>;
};
export default BinderNui;