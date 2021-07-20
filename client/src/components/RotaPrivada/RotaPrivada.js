import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import verificarAuth from '../../auth/verificarAuth';
import Pagina404 from '../Pagina404/Pagina404';


const RotaPrivada = ({url, children}) => {
  let historico = useHistory();

  return (
    <Route path={url} exact>
      {verificarAuth() ? children : historico.redirect('/login')}
    </Route>
  )
}

export default RotaPrivada;
