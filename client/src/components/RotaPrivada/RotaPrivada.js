import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import verificarAuth from '../../auth/verificarAuth';
import Pagina404 from '../Pagina404/Pagina404';


const RotaPrivada = ({url, component, exact}) => {
  let historico = useHistory();

  return (
    <>
      {verificarAuth() ? <Route path={url} component={component} exact={exact ? true : false}/> : historico.redirect('/login') }
    </>
  )
}

export default RotaPrivada;
