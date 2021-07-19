import express from 'express';
import Usuario from '../models/usuario.js';


export const registroController = async (req, res) => {
  try {
    console.log(req.body);
    const { email, cnpj } = req.body;
    const erros = [];

    try {
      // Procurando informações preexistentes
      if (await Usuario.findOne({ email })) {
        erros.push("Email já cadastrado");
      }
      if (await Usuario.findOne({ cnpj })) {
        erros.push("CNPJ já cadastrado");
      }

      if(erros.length > 0) {
        return res.send({ erros });
      } else {
        // Enviando schema ao servidor
        const novoUsuario = await Usuario.create(req.body);

        // Apagando senha do schema
        novoUsuario.password = undefined;

        //Retornando
        return res.send({ novoUsuario });
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