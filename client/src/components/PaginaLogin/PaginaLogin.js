import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { usuarioSchema } from '../Validations/ValidacaoLogin';

const PaginaLogin = () => {

  // React hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(usuarioSchema)
  });

  // Dados pós validação do YUP 
  const handleDadosValidados = (dados) => {
    console.log(dados);
  }

  

  return (
    <div className="row bg-secondary min-vh-100 m-0 login-imagem position-relative">
      <div className="blind"></div>
      <div className="d-flex justify-content-center align-items-center z-index2">
        <div className="card p-3 shadow-lg">
          <div className="card-body card-login">
            <h4 className="card-title mb-5">Login</h4>
            
            <form onSubmit={handleSubmit((e) => handleDadosValidados(e))}>
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" id="name" className="form-control" id="email" {...register("email")}/>
                <span className="text-danger">{errors.email && `${errors.email.message}`}</span>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label for="senha" className="form-label d-flex">Senha</label>
                  </div>
                  <div className="col">
                    <a href="#">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                <input type="password" name="senha" className="form-control" id="senha" {...register("senha")}/>
                <span className="text-danger">{errors.senha && `${errors.senha.message}`}</span>
              </div>
              <div className="row mt-4">
                <button className="btn btn-primary btn-block py-3">Login</button>
              </div>

								<div class="mt-4 text-center">
									Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
								</div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );

}



export default PaginaLogin;