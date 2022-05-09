import React from "react";
import "./AppStyle.scss";
import { Provider } from "react-redux";
import { NuiProvider } from "fivem-nui-react-lib";
import { Route, HashRouter } from "react-router-dom";
import { store } from "./redux";
import { DWrap } from "./DWrap";
import Nui from "./Nui";
import PackContainer from "./containers/Pack/PackContainer";
import { BinderContainer } from "./containers/Binder/BinderContainer";

function App() {
    return (
        <NuiProvider resource="pma-tcg">
            <Provider store={store}>
                <HashRouter>
                    <DWrap>
                        <Nui>
                            <BinderContainer />
                            <PackContainer />
                        </Nui>
                    </DWrap>
                </HashRouter>
            </Provider>
        </NuiProvider>
    )
}

export default App;