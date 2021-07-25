import React from 'react';
import { Route } from 'react-router-dom';

import WrapperTabela from './WrapperTabela/WrapperTabela';
import TabelaCrud from './TabelaCrud/TabelaCrud';
import AdicionarRegistro from './AdicionarRegistro/AdicionarRegistro';
import EditarRegistro from './EditarRegistro/EditarRegistro';




const PaginaTabela = () => {


  return (
    <WrapperTabela>
      <Route path="/registros" exact component={TabelaCrud}></Route>
      <Route path="/registros/novo" exact component={AdicionarRegistro}></Route>
      <Route path="/registros/editar" exact component={EditarRegistro}></Route>
    </WrapperTabela>
  );

}

export default PaginaTabela;