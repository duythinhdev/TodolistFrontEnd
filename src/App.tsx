import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./component/login/login";

const App = () => {
    let router = <Router>
        <div>
            <Switch>
                <Route path="/login" component={Login}>
                </Route>
                <Route path="/main">
                </Route>
            </Switch>
        </div>
    </Router>;
    return (
        <>
            {router}
        </>
    );
}

export default App;
