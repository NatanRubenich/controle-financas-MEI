import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RotaPrivada from './components/RotaPrivada/RotaPrivada';

import Header from './components/Header/Header';
import PaginaLogin from './components/PaginaLogin/PaginaLogin';
import TelaInicial from './components/TelaInicial/TelaInicial';
import PaginaCadastro from './components/PaginaCadastro/PaginaCadastro';
import PaginaTabela from './components/PaginaTabela/PaginaTabela';
import MinhaConta from './components/MinhaConta/MinhaConta';

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
            <Header />
            <PaginaLogin />
          </Route>

          <Route path="/cadastro" exact>
            <Header />
            <PaginaCadastro />
          </Route>

          <RotaPrivada path="/registros">
            <Header />
            <PaginaTabela />
          </RotaPrivada>

          <Route path="/minha-conta">
            <Header />
            <MinhaConta />
          </Route>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;