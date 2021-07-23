import React from 'react';

const ItemCrud = ({ dados }) => {

  const data = new Date(dados.dataVenda).toLocaleString('pt-BR').split(' ');
  
  const formatarTipoVenda = () => {
    let resposta = dados.tipoVenda;
    if(resposta === 'servico') {
      return resposta = 'Serviço';
    } else if (resposta === 'produto') {
      return resposta = 'Produto';
    }
    return resposta;
  }

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <tr className="td-registros">
      <td>{dados.nomeCliente}</td>
      <td>{formatarTipoVenda()}</td>
      <td>{data[0]}</td>
      <td>{dados.quantidade}</td>
      <td>{formatarMoeda(dados.valorUnitario)}</td>
      <td>{dados.descricao}</td>
      <td>{dados.desconto} %</td>
      <td>{dados.notaFiscal ? "Sim" : "Não"}</td>
      <td>{formatarMoeda(dados.valorFinal)}</td>

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