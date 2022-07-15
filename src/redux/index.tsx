import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
// import { cardsReducer } from "./cards/cards.slice";
import { userReducer } from "./user/user.slice";
import { binderReducer } from "./binder/binder.slice";
import { showcaseReducer } from "./showcase/showcase.slice";
import logger from "redux-logger";
import { packReducer } from "./pack/pack.slice";

export const store = configureStore({
    reducer: {
        // cards: cardsReducer,
        user: userReducer,
        binder: binderReducer,
        pack: packReducer,
        showcase: showcaseReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;