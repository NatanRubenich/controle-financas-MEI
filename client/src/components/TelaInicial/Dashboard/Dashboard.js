import React from 'react';
import GraficoPizza from './GraficoPizza/GraficoPizza';

const card = (titulo, icone) => {
  return (
    <div className="col-0 col-md-6 p-2">
      <div className="card bg-light rounded shadow-lg">
        <div className="d-flex flex-row g-0">
          <div className="col d-flex flex-row">
            <div className="card-body">
              <span className="fs-5 text-primary">{titulo}</span>
              <h3>265</h3>
            </div>


            <div className="col-3 d-flex justify-content-center align-items-center fs-1 text-primary m-2">
              <i class={`fas fa-${icone}`}></i>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}



const Dashboard = () => {

  return (
    <div className="row m-0 p-3 p-md-5 min-vh-100 bg-primary">
      <div className="col-0 m-0 ps-5 border">
        <h1 className="pt-4 ps-md-3 display-3">Dashboard</h1>
      </div>
      <div className="col-0 col-lg-8 p-0 borderblack">
        <div className="row m-0">
            {card("Vendas", "dollar-sign")}
            {card("Clientes", "users")}
            {card("Rendimento do mês", "calendar-alt")}
            {card("Rendimentos do ano", "chart-line")}
        </div>
      </div>
      <div className="col-4 borderblack p-2">
        <div className="container bg-light rounded py-3 text-center">
          <span className="fs-5 text-primary">Tipos de Venda</span>
          <div className="card-body px-0">
            <GraficoPizza />
          </div>
        </div>
      </div>
      <div className="col-0 border"></div>
    </div>
  )

}

export default Dashboard;