import React, {useState} from 'react';
import api from '../services/api';

function CadastroUsuario() {

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Telefone, setTelefone] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            Nome,
            Email,
            Senha,
            Telefone,
        };

        try {
            console.log(dados);
            const response = await api.post('user', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do Usuario é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar Usuario " + error.message);            
        }
    }
        return (
            <div>
                <div>
                    <h1>Cadastro de Usuario</h1>
    
                    <form onSubmit={handleCadastro}>
                        <input 
                            placeholder="Nome de usuário"
                            value={Nome}
                            onChange={e => setNome(e.target.value)}/> 
    
                        <input 
                            placeholder="Email"
                            value={Email}
                            onChange={e => setEmail(e.target.value)}/> 
    
                        <input 
                            placeholder="Senha"
                            value={Senha}
                            onChange={e => setSenha(e.target.value)}/> 
    
                        <input 
                            placeholder="Telefone"
                            value={Telefone}
                            onChange={e => setTelefone(e.target.value)}/> 

                        <button className="button" type="submit">Cadastrar Usuario</button>
                    </form>
        
    
                </div>
            </div>
    
        );
    }
    
    export default CadastroUsuario;