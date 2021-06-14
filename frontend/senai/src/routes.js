import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';
import ListaLivro from './paginas/Teste/ListaLivro';
import Cadastro from './paginas/Teste/Cadastro';
import books from './paginas/Teste/Livro/index';
import Usuario from './paginas/Teste/Usuario/index';


function routes () {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HelloMessage}/>
            <Route path="/Teste" component={Teste}/>
            <Route path="/books" component={books}/>
            <Route path="/ListaLivro" component={ListaLivro}/>
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/Usuario" component={Usuario}/>

        </Switch>
        </BrowserRouter>
    )
}

export default routes;