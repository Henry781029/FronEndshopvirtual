import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Authenticate/Login/loginUser'
import Layout from './Component/Layout/layoutSell'
import Register from './Authenticate/Register/registerUser'
import Product from './Authenticate/Product/registerProduct'
import List from './Component/List/ListProduct'

function App  () {
    
    return (
        <Router>
            <Switch>
                <Route exact path='/'><Login />
                </Route>
                <Route exact path='/app'><Layout />
                </Route>  
                <Route exact path='/register'><Register />
                </Route>  
                <Route exact path='/product'><Product />
                </Route> 
                <Route exact path='/list'><List />
                </Route>
            </Switch>
        </Router>
    );
}




export default App;