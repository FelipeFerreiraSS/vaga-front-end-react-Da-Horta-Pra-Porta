import React from "react";

import Home from './Home';
import RedefinirSenha from './RedefinirSenha'

import { Switch, Route } from 'react-router-dom'

function Routes() {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/RedefinirSenha" component={RedefinirSenha} />
            <Route component={()=> <div>Page 404</div>}/>
        </Switch>
    )
}

export default Routes