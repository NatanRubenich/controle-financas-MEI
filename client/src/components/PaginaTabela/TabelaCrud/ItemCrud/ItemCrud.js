import React from 'react';

const ItemCrud = ({ dados }) => {

  const data = new Date(dados.dataVenda).toLocaleString('pt-BR').split(' ');
  


  return (
    <tr className="td-registros">
      <td>{dados.nomeCliente}</td>
      <td>{dados.tipoVenda}</td>
      <td>{data[0]}</td>
      <td>{dados.quantidade}</td>
      <td>{dados.valorUnitario}</td>
      <td>{dados.descricao}</td>
      <td>{dados.desconto} %</td>
      <td>{dados.notaFiscal ? "Sim" : "Não"}</td>
      <td>{dados.valorFinal}</td>

      <td className="acoes">
        <div className="d-flex"> 
          <button className="btn btn-success m-1"><i className="fas fa-pencil-alt"></i></button> 
          <button className="btn btn-danger m-1"><i className="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  );
}

export default ItemCrud;