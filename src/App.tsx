import React from "react";
import "./AppStyle.scss";
import { Provider } from "react-redux";
import { NuiProvider } from "fivem-nui-react-lib";
import { HashRouter } from "react-router-dom";
import { store } from "./redux";
import { DWrap } from "./DWrap";
import Nui from "./Nui";
import PackContainer from "./containers/Pack/PackContainer";
import { BinderContainer } from "./containers/Binder/BinderContainer";
import { ShowcaseContainer } from "./containers/Showcase/ShowcaseContainer";
import { SnackbarProvider } from 'notistack';
import { TradingContainer } from "./containers/Trading/TradingContainer";

function App() {
    return (
        <NuiProvider resource="pma-tcg">
            <Provider store={store}>
                <HashRouter>
                    <DWrap>
                        <Nui>
                            <SnackbarProvider maxSnack={3}>
                                <BinderContainer />
                                <PackContainer />
                                <ShowcaseContainer />
                                <TradingContainer />
                            </SnackbarProvider>
                        </Nui>
                    </DWrap>
                </HashRouter>
            </Provider>
        </NuiProvider>
    )
}

export default App;