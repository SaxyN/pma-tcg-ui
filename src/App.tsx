import React from "react";
import "./AppStyle.scss";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import { store } from "./redux";
import BinderContainer from "./containers/BinderContainer";
import CardProfileContainer from "./containers/CardProfileContainer";

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Route exact path={"/"} component={BinderContainer} />
                    <Route exact path={"/profile"} component={CardProfileContainer} />
                </div>
            </HashRouter>
        </Provider>
    )
}

export default App;