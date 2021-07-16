import React from 'react';

const WrapperTabela = ({children}) => {


  return (
    <div className="tabela-imagem">
      <div className="row min-vh-100 m-0 position-relative">
        <div className="blind"></div>
        <div className="col-11 col-md-10 mx-auto m-5 bg-light rounded justify-content-center align-items-center shadow-lg z-index2">
          <div className="container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );



}

export default WrapperTabela;