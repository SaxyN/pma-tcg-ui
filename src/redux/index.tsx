import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { cardsReducer } from "./cards/cards.slice";
import { userReducer } from "./user/user.slice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;