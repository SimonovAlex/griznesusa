import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { InvoicePage } from "./pages/InvoicePage";

export const UseRoutes = () => {
    return (
        <Switch>
            <Route path="/invoice" exact>
                <InvoicePage/>
            </Route>
            <Redirect to="/invoice" />
        </Switch>
    )
};