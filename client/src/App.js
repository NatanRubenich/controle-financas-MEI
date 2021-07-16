import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import PaginaLogin from './components/PaginaLogin/PaginaLogin';
import TelaInicial from './components/TelaInicial/TelaInicial';
import PaginaCadastro from './components/PaginaCadastro/PaginaCadastro';
import PaginaTabela from './components/PaginaTabela/PaginaTabela';
import TabelaCrud from './components/PaginaTabela/TabelaCrud/TabelaCrud';
import AdicionarRegistro from './components/PaginaTabela/AdicionarRegistro/AdicionarRegistro';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact>
            <Header />
            <TelaInicial />
          </Route>

          <Route path="/login" exact>
            <PaginaLogin />
          </Route>

          <Route path="/cadastro" exact>
            <PaginaCadastro />
          </Route>

          <Route path="/registros">
            <PaginaTabela />
          </Route>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;