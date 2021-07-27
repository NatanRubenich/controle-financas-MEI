import React from 'react';
import GraficoPizza from './GraficoPizza/GraficoPizza';
import Card from './Card/Card';

const Dashboard = () => {

  return (
    <div className="row m-0 px-2 p-md-5 min-vh-100 bg-light" id="dashboard">
      <div className="col-0 col-md-8 py-4 text-center text-md-start display-3">
        Dashboard
      </div>
      <div className="col-4 d-none d-md-flex align-items-center ">
        <button className="btn btn-warning mx-auto py-3 px-4 d-flex justify-content-center align-items-center">
          <i className="fas fa-calculator"></i>
          <span className="ps-2">Gerar Extrato Mensal</span>
        </button> 
      </div>

      <div className="col-0 col-lg-8 p-0">
        <div className="row m-0 p-0">
            <Card titulo="Vendas" icone="dollar-sign" />
            <Card titulo="Clientes" icone="users" />
            <Card titulo="Rendimento do mês" icone="calendar-alt" />
            <Card titulo="Rendimentos do ano" icone="chart-line" />
        </div>
      </div>
      <div className="col-11 col-md-8 col-lg-4 p-0 p-md-2 mx-auto shadow">
        <div className="container bg-light rounded py-3 text-center">
          <span className="fs-5 text-primary">Tipos de Venda</span>
          <div className="card-body px-0">
            <GraficoPizza />
          </div>
        </div>
      </div>
      
      <div className="d-flex d-md-none col-10 mx-auto my-5 p-0">
        <button className="btn btn-warning mx-auto py-3 px-4 fs-5 d-flex justify-content-center align-items-center">
          <i className="fas fa-calculator"></i>
          <span className="ps-2">Gerar Extrato Mensal</span>
        </button> 
      </div>
    </div>
  );

}

export default Dashboard;