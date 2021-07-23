import React from 'react';

const ItemCrud = ({dados}) => {


  return (
    <tr className="td-registros">
      <td>Marcos Silva Campos</td>
      <td>Serviço</td>
      <td>25/02/2021</td>
      <td>695</td>
      <td>69,50</td>
      <td>Mmkmasdinenawen iuhadusdau dasuibadsbuasdui</td>
      <td>5%</td>
      <td>Sim</td>
      <td>1250,00</td>

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