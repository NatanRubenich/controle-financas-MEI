import React from 'react';

import FormCadastro from './FormCadastro/FormCadastro';

const PaginaLogin = () => {

  return (
    <div className="row bg-secondary min-vh-100 m-0">
      <div className="col-11 col-md-8 mx-auto m-5 bg-light rounded justify-content-center align-items-center">
        <div className="container">
          <h4 className="text-center mt-4 mb-5">Cadastro</h4>
          <div className="container">
            <FormCadastro/>
          </div>
        </div>
      </div>
    </div>
  );

}



export default PaginaLogin;