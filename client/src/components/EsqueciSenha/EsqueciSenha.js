import React, {useEffect, useState} from 'react';
import axios from '../../axios/axios';
import PagPadrao from '../PagPadrao/PagPadrao';
import { emailSchema } from '../Validations/ValidacaoEmail';


const PaginaLogin = () => {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');


  const requisicao = async () => {
    await axios({
      method: 'post',
      url: '/esqueci-senha/enviar',
      data: {
        email: email
      }
    })
    .then((res) => {
      setErro("");
      setSucesso("Email enviado! Cheque sua caixa de mensagens.")
    })
    .catch(err => {
      setErro("Erro. Confira as informações");
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    emailSchema
    .validate({email})
    .then(() => {
      requisicao();
    })
    .catch((err) => {
      setErro(err.message);
    });
  }


  return (
    <PagPadrao titulo="Recuperar Senha" background="login-imagem">
      <div className="row my-3">
        <h5>Insira o email cadastrado:</h5>
        <form className="col d-flex flex-row" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <button type="submit" className="col col-md-2 btn btn-primary">Enviar</button>
        </form>
        <p className="text-danger">{erro}</p>
        <p className="text-success">{!erro && sucesso}</p>
      </div>
    </PagPadrao>
  );

}



export default PaginaLogin;