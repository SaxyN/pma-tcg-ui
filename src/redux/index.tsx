import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.slice";
import { binderReducer } from "./binder/binder.slice";
import { showcaseReducer } from "./showcase/showcase.slice";
import { packReducer } from "./pack/pack.slice";
import { tradingReducer } from "./trading/trading.slice";
import { cardsReducer } from "./cards/cards.slice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        user: userReducer,
        binder: binderReducer,
        cards: cardsReducer,
        pack: packReducer,
        showcase: showcaseReducer,
        trade: tradingReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;