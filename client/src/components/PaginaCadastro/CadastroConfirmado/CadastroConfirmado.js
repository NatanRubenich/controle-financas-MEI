import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import axios from '../../../axios/axios';

import PagPadrao from '../../PagPadrao/PagPadrao';


const CadastroConfirmado = () => {
  const [status, setStatus] = useState("Aguarde...");
  const location = useLocation();

  const token = location.pathname.split('/');

  const confirmar = async () => {
      await axios({
        method: 'patch',
        url: '/cadastro/confirmar/',
        data: {
          token: token[3]
        }
      })
      .then(response => {
        setStatus("Email confirmado com sucesso!");
      })
      .catch(err => {
        setStatus("Erro!");
      });
  }

  confirmar();

  return(
    <PagPadrao background="login-imagem">
      <div className="row">
        <div className="col-12 text-center">
          <h4>{status}</h4>
        </div>
      </div>
    </PagPadrao>

  );

}



export default CadastroConfirmado;