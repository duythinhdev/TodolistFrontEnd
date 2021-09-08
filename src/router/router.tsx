import Signup from "../component/signUp/signup";
import Login from "../component/login/login";
import Main from "../component/main/main";
import Bodyhome from "../component/bodyhome/bodyhome";
import Bodytask from "../component/bodyTask/bodytask";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
const routes: Array<any> = [
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "/",
        component: Login,
        exact: true,
    },
    {
        path: "/main",
        component: Main
    },
    {
        path: "/home",
        component: Bodyhome
    },
    {
        path: "/task",
        component: Bodytask
    },
]
export const routing = <Router>
    <div>
        <Switch>
            {routes.map((route, index) => {
                return    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />}
            )}
        </Switch>
    </div>
</Router>
