import React from "react";
import "./AppStyle.scss";
import { Provider } from "react-redux";
import { NuiProvider } from "fivem-nui-react-lib";
import { Route, HashRouter } from "react-router-dom";
import { store } from "./redux";
import BinderContainer from "./containers/BinderContainer";
import CardProfileContainer from "./containers/CardProfileContainer";
import { DWrap } from "./DWrap";
import Nui from "./Nui";
import { Binder } from "./Binder/Binder";
import BinderNui from "./Binder/BinderNui";
import PackContainer from "./Pack/PackContainer";

function App() {
    return (
        <NuiProvider resource="pma-tcg">
            <Provider store={store}>
                <HashRouter>
                    <DWrap>
                        <Nui>
                            <Binder />
                            <PackContainer />
                            {/* <div>
                                <Route exact path={"/"} component={BinderContainer} />
                                <Route exact path={"/profile"} component={CardProfileContainer} />
                            </div> */}
                        </Nui>
                    </DWrap>
                </HashRouter>
            </Provider>
        </NuiProvider>
    )
}

export default App;