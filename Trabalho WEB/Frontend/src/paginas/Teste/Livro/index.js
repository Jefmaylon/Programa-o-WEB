import React, { useState, useEffect } from 'react';
import api from '../services/api';


function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Carros</h1>
            <ul>
                {
                    carros.map(livro => (
                        <li>
                            <p>Id: {carros.id}</p>
                            <p>marca: {carros.marca}</p>
                            <p>modelo: {carros.modelo}</p>
                            <p>Quantidade de lugares: {carros.qtdlugares}</p>
                            <p>Cor: {carros.cor}</p>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;

