import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2'

const GraficoPizza  = () => {

  const [dados, setDados] = useState({
    labels: [
      'Produtos',
      'Serviços'
    ],
    datasets: [{
      label: 'Tipos de Venda',
      data: [30, 70],
      cutout: "80%",
      backgroundColor: [
        'rgb(255, 99, 0)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  });

  return (
    <Doughnut 
      data={dados}
      width="250"
      height="250"
      options={{
        responsive: true,
        maintainAspectRatio: false
    }} />
  );
}


export default GraficoPizza;