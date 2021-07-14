import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PaginaLogin from './components/PaginaLogin/PaginaLogin';
import TelaInicial from './components/TelaInicial/TelaInicial';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={TelaInicial} />
          <Route path="/login" exact component={PaginaLogin} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;