import React from "react";

import Home from './pages/Home';
import RedefinirSenha from './pages/RedefinirSenha'
import Cadastro from './pages/Cadastro'

import { Switch, Route } from 'react-router-dom'

function Routes() {
    return(
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/RedefinirSenha" component={RedefinirSenha} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route component={()=> <div>Page 404</div>}/>
        </Switch>
    )
}

export default Routes