import React, { useState, useEffect } from 'react';
import axios from '../../../axios/axios'
import GraficoPizza from './GraficoPizza/GraficoPizza';
import Card from './Card/Card';

const Dashboard = () => {

  const [tabAtiva, setTabAtiva] = useState("mes");

  const [dadosMes, setDadosMes] = useState({});
  

  const getDashboardMes = async (id) => {
    if(localStorage.getItem("token")) {
      await axios({
        method: 'get',
        data: {id},
        url: '/dashboard/mes',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        setDadosMes(res);
      })
      .catch(err => {
        console.log(err);
        console.log('Erro ao buscar dados do dashboard', err);
      });
    } else {
      console.log('Não possui autorização');
    }
  }

  useEffect(() => {
    if(tabAtiva === "mes") {
      getDashboardMes();
    }
  }, [tabAtiva]);
  


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
            <div className="col-0">
              <button className={`btn btn-outline-primary m-1 ${tabAtiva === "mes" && "bg-primary text-white"}`} onClick={() => setTabAtiva("mes")} >Mês</button>
              <button className={`btn btn-outline-primary m-1 ${tabAtiva === "ano" && "bg-primary text-white"}`} onClick={() => setTabAtiva("ano")} >Ano</button>
            </div>

          { tabAtiva === "mes" && 
            <>
              <Card titulo="Vendas" icone="chart-line" dado={dadosMes.data && dadosMes.data.vendas}/>
              <Card titulo="Clientes" icone="users" dado={dadosMes.data && dadosMes.data.clientesUnicos}/>
              <Card titulo="Rendimento do mês" icone="calendar-alt" dado={dadosMes.data && dadosMes.data.rendimento.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}/>
              <Card titulo="Média de cada venda" icone="dollar-sign" dado={dadosMes.data && dadosMes.data.media.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}/>
            </>
          }

          { tabAtiva === "ano" &&
            <>
              Dashboard Ano
            </>
          }
            
        
        </div>
      </div>
      <div className="col-11 col-md-8 col-lg-4 p-0 p-md-2 mx-auto shadow">
        { tabAtiva === "mes" &&
          <div className="container bg-light rounded py-3 text-center">
            <span className="fs-5 text-primary">Tipos de Venda</span>
            <div className="card-body px-0">
              { dadosMes.data && <GraficoPizza dado={dadosMes.data.tipoVenda}/> }
            </div>
          </div>
        }

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