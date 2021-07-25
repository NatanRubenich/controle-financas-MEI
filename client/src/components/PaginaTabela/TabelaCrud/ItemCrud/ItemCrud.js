import React, { useState } from 'react';
import ModalEscolha from '../../../ModelEscolha/ModelEscolha';
import { useDadosEditar } from '../../../../Context/DadosEditar';
import { useHistory } from 'react-router-dom';


const ItemCrud = ({ dados, deletar }) => {

  // Mostrar detalhes
  const [ detalhes, setDetalhes ] = useState(false);

  // Hook - dados para editar
  const { dadosEditar, setDadosEditar } = useDadosEditar();

  // Redirecionador
  const historico = useHistory();

  const handleEditarDados = () => {
    setDadosEditar(dados);
    historico.push('/registros/editar');
  }


  /// FORMATAÇÃO DE DADOS
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
    <div 
      className="row border border-secondary secFont fw-light fs-6 border-2 rounded px-5 py-2 my-1 selecionavel itemCrud"
      onClick={() => setDetalhes(!detalhes)}
    >
      <div className="container">
        <div className="row my-auto">
          <div className="col my-auto">
            <span className="display fs-5 text-uppercase">{dados.nomeCliente}</span>
          </div>
          <div className="col-2 my-auto">
            <label className="fw-normal">Data: &nbsp;</label>
            <span>{data[0]}</span>
          </div>
          <div className="col-3 my-auto">
            <label className="fw-normal">Valor Final: &nbsp;</label>
            <span>{formatarMoeda(dados.valorFinal)}</span>
          </div>
        </div>

        <div className={`row mt-3 ${detalhes ? 'd-flex' : 'd-none'}`}>
          <div className="col-9">
            <div className="row">

              <div className="col-4">
                <label className="fw-normal">Tipo da Venda: &nbsp;</label>
                <span>{formatarTipoVenda()}</span>
              </div>
              <div className="col-4">
                <label className="fw-normal">Desconto: &nbsp;</label>
                <span>{dados.desconto}%</span>
              </div>
              <div className="col-4">
                <label className="fw-normal">Quantidade: &nbsp;</label>
                <span>{dados.quantidade}</span>
              </div>
              <div className="col-4">
                <label className="fw-normal">Valor Unitário: &nbsp;</label>
                <span>{formatarMoeda(dados.valorUnitario)}</span>
              </div>
              <div className="col-4">
                <label className="fw-normal">Nota Fiscal: &nbsp;</label>
                <span>{dados.notaFiscal ? "Sim" : "Não"}</span>
              </div>

              <div className="col-8">
                <label className="fw-normal">Descrição: &nbsp;</label>
                <span>{dados.descricao}</span>
              </div>


            </div>
          </div>
          

          <div className="col flex-row no-wrap justify-content-end"> 
            <div className="d-flex justify-content-end">
              <button className="btn btn-success m-1" onClick={handleEditarDados}><i className="fas fa-pencil-alt"></i></button> 
              <ModalEscolha titulo="Deseja realmente excluir?" callback={() => deletar(dados._id)} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}


/*
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
          <button className="btn btn-success m-1" onClick={handleEditarDados}><i className="fas fa-pencil-alt"></i></button> 
          <ModalEscolha titulo="Deseja realmente excluir?" callback={() => deletar(dados._id)} />
        </div>
      </td>
    </tr>
    */
export default ItemCrud;