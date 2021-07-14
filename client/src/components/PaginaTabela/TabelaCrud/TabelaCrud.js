import React from 'react';

const PaginaTabela = () => {


  return (
    <div className="row">
      <table className="table table-striped">
      <colgroup>
        <col/>
        <col/>
        <col/>
        <col/>
        <col className="td-acoes"/>
      </colgroup>
        <thead className="pe-2 bg-primary">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Valor</th>
            <th scope="col">Data</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marcos</td>
            <td>065963852-14</td>
            <td>R$250,00</td>
            <td>25/02/2021</td>
            <td className="p-0">
              <div className="d-flex"> 
                <button className="btn btn-success m-1"><i className="fas fa-pencil-alt"></i></button> 
                <button className="btn btn-danger m-1"><i className="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );



}

export default PaginaTabela;