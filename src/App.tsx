import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./component/login/login";
import Main from "./component/main/main";
import Home from "./component/bodyhome/bodyhome";
import Task from "./component/bodyTask/bodytask";
import Listtask from "./component/childrenbodytask/listtask/listtask";
import Listboard from "./component/childrenbodytask/listboard/listboard";

const App = () => {
    let router = <Router>
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main}  />
                <Route path="/home" component={Home} />
                <Route path="/task" component={Task}  />
                <Route path="/task/list" component={Listtask}  />
                <Route path="/task/board" component={Listboard} />
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
