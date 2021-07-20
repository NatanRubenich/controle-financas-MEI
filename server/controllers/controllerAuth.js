import express from 'express';
import Usuario from '../models/usuario.js';
import jwt from 'jsonwebtoken';


//// LÓGICA DE CADASTRO
export const registroController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, cnpj } = req.body;
    const erros = [];

    try {
      // Procurando informações preexistentes
      const resultadoEmail = async () => {
        if (await Usuario.findOne({ email })) {
          erros.push("Email já cadastrado");
          return true;
        }
      }
      const resultadoCNPJ = async () => {
        if (await Usuario.findOne({ cnpj })) {
          erros.push("CNPJ já cadastrado");
          return true;
        }
      }

      const checarExistentes = async () => {
        await resultadoEmail();
        await resultadoCNPJ();
        return erros.length > 0;
      }

    
      if(await checarExistentes()) {
        return res.send({ erros: erros });
      } else {
        // Enviando schema ao servidor
        const novoUsuario = await Usuario.create(req.body);

        // Apagando senha do schema
        novoUsuario.senha = undefined;

        // Gerando JWT 
        const token = jwt.sign({ userId: novoUsuario.id }, process.env.SECRET_JWT, {
          expiresIn: 86400
        })

        //Retornando o usuário + jwt
        return res.send({ novoUsuario, token });
      }

    } 
    catch(err) {
      res.send({ message: err.message });
    }

  }
  catch (err) {
    return res.status(400).send({ erro: "Registro falhou" });
  }
}