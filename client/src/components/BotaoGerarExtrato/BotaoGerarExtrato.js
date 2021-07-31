import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const BotaoGerarExtrato = () => {

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          Gerar Extrato Mensal
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <button className="dropdown-item">Action</button>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )


}
/* 
        <button className="btn btn-warning mx-auto py-3 px-4 fs-5 d-flex justify-content-center align-items-center">
          <i className="fas fa-calculator"></i>
          <span className="ps-2">Gerar Extrato Mensal</span>
        </button> 
  */


export default BotaoGerarExtrato;
