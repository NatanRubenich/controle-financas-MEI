import express from 'express';
import Usuario from '../models/usuario.js';
import GrupoTabela from '../models/grupotabela.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import { loginJWT } from '../jwt/jwt.js'
import mailer from '../modules/mailer.js'

//////////////////////////////////////////////////////////
//////////        LÓGICA DE CADASTRO           //////////
export const cadastroController = async (req, res) => {
  try {
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
        const novoUsuario = new Usuario(req.body);
        const novoGrupoTabela = new GrupoTabela({ usuario: novoUsuario._id });
    
        // Adicionando a tabela no usuario
        await novoUsuario.set({ grupoTabela: novoGrupoTabela });
        
        // Salvando
        await novoUsuario.save();
        await novoGrupoTabela.save();

        // Removendo a senha do model
        novoUsuario.senha = undefined;

        // Gerando JWT 
        const token = await loginJWT(novoUsuario.id);
        console.log(novoUsuario, req.body);
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


//////////////////////////////////////////////////////////
//////////          LÓGICA DE LOGIN            //////////
export const loginController = async (req, res) => {
  try {
    const { email, senha } = req.body;

    try {
      // Procurando informações preexistentes
      const usuario = await Usuario.findOne({ email }).select('+senha');
 
      // Verificando se a senha corresponde
      if (!await bcrypt.compare(senha, usuario.senha)) {
        return res.send({ erro: "Senha incorreta"});
      }

      // Limpando a senha do schema
      usuario.senha = undefined;

      // Gerando JWT 
      const token = await loginJWT(usuario.id);
      res.send({ usuario, token });


    } 
    catch(err) {
      res.send({ message: err.message });
    }

  }
  catch (err) {
    return res.status(400).send({ erro: "Registro falhou" });
  }
}

/// Retornar auth
export const authController = async (req, res) => {
  if(res.locals.usuario) {
    try {     
      const usuario = await Usuario.findById(res.locals.usuario._id);
      
      return res.status(200).send({usuario: usuario});

    } catch (error) {
      res.status(401).send("Usuário não está logado")
    }
  }

  return res.send("Usuário não encontrado");
};



//////////////////////////////////////////////////////////
//////////          LÓGICA DE UPDATE            //////////
export const updateUsuarioController = async (req, res) => {
  if(res.locals.usuario) {
    const objUsuario = res.locals.usuario;
    try {
      const _id = objUsuario._id;
      await Usuario.findOneAndUpdate({_id}, { $set: req.body }, { upsert: true, new: true });

      res.status(200).send("certo");

    }
    catch(err) {
      res.status(500).send({ message: err.message });
    }
  }
}


//////////////////////////////////////////////////////////
//////////    ENVIAR EMAIL DE REC SENHA           //////////
export const esqueciSenhaController = async (req, res) => {
  const { email } = req.body;
  try {
    const usuario = await Usuario.findOne({ email })

    if(!usuario) {
      res.status(400).send("Usuário não encontrado");
    }

    /////////////////////////
    // Criando token
    const token = crypto.randomBytes(20).toString('hex');
    
    // Criando horário de expiração
    const agora = new Date();
    agora.setHours(agora.getHours() + 1);

    // Inserindo token e data de exp no DB
    await Usuario.findByIdAndUpdate(usuario._id, {
      '$set': {
        tokenResetSenha: token,
        expiracaoTokenResetSenha: agora
      }
    });

    // Nodemailer
    try {
        mailer.sendMail({
          to: email,
          from: 'email@email.com',
          subject: 'Recuperação de Senha - MEI Controle',
          template: 'recuperarSenha',
          context: { token },
        }, (erro) => {
          if(erro) return res.status(400).send("erro ao enviar email");
        });
      
        return res.send("Email enviado");
    }
    catch(error) {
      res.status(400).send("Erro ao atualizar o usuario");
      console.log(error);
    }
  }

  catch(error) {
    res.status(400).send('Erro em esqueci senha');
  }
}


///////////////////////////////////////////////////////
///////////        RESETAR SENHA     /////////////////
export const resetarSenhaController = async (req, res) => {
  const { email, token, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email }).select('+tokenResetSenha +expiracaoTokenResetSenha');

    try {
      if(!usuario) {
        return res.status(400).send({erro:"Usuário não encontrado"});
      }
  
      if(token !== usuario.tokenResetSenha) {
        return res.status(401).send({erro: "Código Inválido"});
      }
  
      if(new Date() > usuario.expiracaoTokenResetSenha) {
        return res.status(402).send({erro: "Código Expirado"});
      }
  
      usuario.senha = senha;
      usuario.tokenResetSenha = undefined;
      usuario.expiracaoTokenResetSenha = undefined;
      await usuario.save();

    } catch(err) {
      console.log(err);
    }

    res.status(200).send("Senha alterada com sucesso!D");

  } catch (err) {
    res.status(500).send("Erro ao encontrar usuario");
    console.log(err)
  }





}


