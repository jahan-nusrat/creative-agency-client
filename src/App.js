import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customer from './components/Customer/Customer/Customer';
import Home from './components/Home/Home/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/customer/:location">
                    <Customer />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
