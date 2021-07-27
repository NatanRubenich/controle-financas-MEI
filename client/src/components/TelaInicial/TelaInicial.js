import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../Context/LoginContext';

import SideBar from './SideBar/SideBar';
import Hero from './Hero/Hero';
import Dashboard from './Dashboard/Dashboard';


const TelaInicial = () => {
  const { logado, setLogado } = useLogin();

  return (
    <div className="row">
      {logado ? <SideBar/> : null}
      <Hero/>
    </div>
  );
}



export default TelaInicial;