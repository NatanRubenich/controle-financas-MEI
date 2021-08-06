import React, {useEffect, useState} from 'react';
import axios from '../../axios/axios';
import { useLogin } from '../../Context/LoginContext';

import PagPadrao from '../PagPadrao/PagPadrao';
import DadosConta from './DadosConta.js/DadosConta';

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
      <DadosConta usuario={usuario}/>
    </PagPadrao>
  );

}



export default PaginaLogin;