import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
      <div className="row mx-auto px-md-5 py-4">
        <h5>Insira o email cadastrado:</h5>
        <form className="d-md-flex flex-row" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <button type="submit" className="col-12 col-md-2 mt-2 mt-md-0 btn btn-primary">Enviar</button>
        </form>
        <p className="text-danger">{erro}</p>
        <p className="text-success">{!erro && sucesso}</p>

        <div className="row mx-auto text-center justify-content-end">
          <Link to="/atualizar-senha" className="col-12 col-md-6 btn btn-warning text-dark p-3 mx-0">Já possui um código? Clique Aqui!</Link>
        </div>
      </div>
    </PagPadrao>
  );

}



export default PaginaLogin;