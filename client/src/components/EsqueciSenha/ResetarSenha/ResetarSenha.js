import React, {useEffect, useState} from 'react';
import axios from '../../../axios/axios';
import { useHistory } from 'react-router';
import { codigoSchema } from '../../Validations/ValidacaoEmail';

import PagPadrao from '../../PagPadrao/PagPadrao';


const PaginaLogin = () => {
  const historico = useHistory();

  const [codigo, setCodigo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const requisicao = async () => {
    await axios({
      method: 'post',
      url: '/atualizar-senha/enviar',
      data: {
        email: email,
        token: codigo,
        senha: senha,
        senhaConf: senhaConf
      }
    })
    .then((res) => {
      setErro("");
      setSucesso("Senha alterada com sucesso!");
      setTimeout(() => {
        historico.push('/login');
      }, 2000);
    })
    .catch(err => {
      setErro("Erro. Confira as informações");
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    codigoSchema
    .validate({codigo, email, senha, senhaConf})
    .then(() => {
      requisicao();
    })
    .catch((err) => {
      setErro("Erro. Preencha os campos corretamente");
    });
  }


  return (
    <PagPadrao titulo="Recuperar Senha" background="login-imagem">
      <div className="row my-3">
        
        <form className="col-0 col-md-8 mx-auto" onSubmit={(e) => handleSubmit(e)}>
          <label>Código:</label>
          <input type="text" className="form-control my-1" value={codigo} onChange={(e) => setCodigo(e.target.value)}></input>
          <label>Email:</label>
          <input type="text" className="form-control my-1" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label>Insira a nova senha:</label>
          <input type="password" className="form-control my-1" value={senha} id="senha" onChange={(e) => setSenha(e.target.value)}></input>
          <label>Confirme a senha:</label>
          <input type="password" className="form-control my-1" value={senhaConf} onChange={(e) => setSenhaConf(e.target.value)}></input>
          <button type="submit" className="col col-md-2 btn btn-primary my-2">Enviar</button>
          <p className="text-danger">{erro}</p>
          <p className="text-success">{!erro && sucesso}</p>
        </form>
      </div>
    </PagPadrao>
  );

}



export default PaginaLogin;