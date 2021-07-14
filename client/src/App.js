import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PaginaLogin from './components/PaginaLogin/PaginaLogin';
import TelaInicial from './components/TelaInicial/TelaInicial';
import PaginaCadastro from './components/PaginaCadastro/PaginaCadastro';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={TelaInicial} />
          <Route path="/login" exact component={PaginaLogin} />
          <Route path="/cadastro" exact component={PaginaCadastro} />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;