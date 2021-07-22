import Usuario from '../models/usuario.js';
import GrupoTabela from '../models/grupotabela.js';
import ItemTabela from '../models/itemtabela.js';


export const getTabelaController = async (req, res) => {
  if(res.locals.usuario) {
    const objUsuario = res.locals.usuario;
    const usuarioAtual = await Usuario.findById(objUsuario._id).populate(['grupoTabela']);

    return res.send({ usuarioAtual });
  }
};


export const postTabelaController = async (req, res) => {
  if(res.locals.usuario) {
    const objUsuario = res.locals.usuario;
    try {
      //const usuario = await Usuario.findById(objUsuario._id);
      const tabela = await GrupoTabela.findById(objUsuario.grupoTabela._id);
      // Criando o item
      try {
        // Encontrando a tabela do usuário
        const idTabela = tabela._id;

        // Criando o item novo com o req.body
        const novoItemTabela = await ItemTabela.create({ ...req.body, grupoTabela: idTabela});
        
        await tabela.items.push(novoItemTabela);
        await tabela.save();

        const tabela2 = await GrupoTabela.findById(objUsuario.grupoTabela._id).populate(['items']);

        res.send({ tabela, novoItemTabela, tabela2 });

      } catch (error) {
        res.send("erro ao criar ou fazer push do item");
      }


      return res.send("não foi possível completar todos os passos");

    } catch (error) {
      return res.send("erro ao criar tabela");

    }

    
    return res.send({ usuarioReq: objUsuario, body: req.body });
  }
};