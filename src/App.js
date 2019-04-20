import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
//Components and pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
//css styles
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact={true}
                    path="/"
                    component={() => (
                    <HomePage/>
                )}/>
                <Route
                    exact={true}
                    path="*"
                    component={() => (
                    <NotFound/>
                )}/>
            </Switch>
        );
    }
}

export default App;
