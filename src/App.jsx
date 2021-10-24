import React from 'react'
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from '@mui/material';
import loginUser from './Authenticate/Login';
import layoutUser from './Component/Layout';

export const App = () => {
    return (
        <Router>
            <Suspense
            fallback = {<p>loading...</p>}
            >
                <Switch>
                    <Route exact path='/' name='loginUser'><loginUser />
                    </Route>
                    <Route exact path='/app' name='layout'><layoutUser />
                    </Route>
                    <Button
                    variant= "contained"
                    >MATERIAL UI</Button>
                </Switch>
            </Suspense>
        </Router>
    )
}




export default App;