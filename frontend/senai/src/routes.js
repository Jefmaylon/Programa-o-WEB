import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import routes from './routes';

function routes () {
    return (
        <BrowserRouter>
        <switch>
            <Route path="/" exact={true} component={HelloMessage}/>
            <Route path="/Teste" component={Teste}/>
        </switch>
        </BrowserRouter>
    )
}

export default routes;