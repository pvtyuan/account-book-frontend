import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import "font-awesome-webpack";
import {App} from "./components/app/App";
import {Login} from "./components/login/Login";
import {Root} from "./Root"

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={App}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>,
    document.getElementById("example")
);