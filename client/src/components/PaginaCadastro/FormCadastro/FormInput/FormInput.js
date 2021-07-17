import React from 'react';

const FormInput = ({nome, titulo, tipo, classe}) => {




  return (   

      <div class={classe}>
        <label for={nome} class="form-label">{titulo}</label>
        <input type={tipo} class="form-control" id={nome}/>
      </div>
  );

}



export default FormInput;