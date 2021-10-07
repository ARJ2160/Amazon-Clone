import React, { useEffect } from 'react';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        
        auth.onAuthStateChanged(authUser => {
            
            if (authUser) {
                //If user is logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                //If user is not logged in
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    }, [])
    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* HOME PAGE */}
                    <Route exact path="/">
                        <Header />
                        <Home />
                    </Route>
                    {/* CHECKOUT PAGE */}
                    <Route exact path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
