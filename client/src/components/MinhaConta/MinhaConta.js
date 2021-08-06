import React, {useEffect, useState} from 'react';
import axios from '../../axios/axios';
import { useLogin } from '../../Context/LoginContext';
import { Route } from 'react-router-dom';

import PagPadrao from '../PagPadrao/PagPadrao';
import EditarConta from './EditarConta/EditarConta';
import VerConta from './VerConta/VerConta';

const PaginaLogin = () => {
  const [usuario, setUsuario] = useState();
  const {logado, setLogado} = useLogin();

  const verificarLogin = async () => {
    if(localStorage.getItem("token")) {
      await axios({
        method: 'get',
        url: '/auth',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  useEffect(() => {
    verificarLogin();
  }, [logado]);


  return (
    <PagPadrao titulo="Minha Conta" background="login-imagem">
      <Route exact path="/minha-conta">
        <VerConta usuario={usuario}/>
      </Route>

      <Route exact path="/minha-conta/editar">
        <EditarConta usuario={usuario}/>
      </Route>
    </PagPadrao>
  );

}



export default PaginaLogin;