import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Authenticate/Login/loginUser'

function App  () {
    
    return (
        <Router>
            <Switch>
                <Route exact path='/'><Login />
                </Route>
                <Route exact path='/app' name='layout'><layoutUser />
                </Route>  
            </Switch>
        </Router>
    );
}




export default App;