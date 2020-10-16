import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Customer from './components/Customer/Customer/Customer';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/customer/:location">
                    <Customer />
                </PrivateRoute>
                <PrivateRoute path="/admin/:location">
                    <Admin />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default App
