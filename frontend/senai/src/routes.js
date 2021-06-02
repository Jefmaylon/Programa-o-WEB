import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import books from './paginas/Teste/Livro/index'

function routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HelloMessage}/>
            <Route path="/Teste" component={Teste}/>
            <Route path="/books" component={books}/>
        </Switch>
        </BrowserRouter>
    )
}

export default routes;