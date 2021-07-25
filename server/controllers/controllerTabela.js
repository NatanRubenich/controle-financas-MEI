import Usuario from '../models/usuario.js';
import GrupoTabela from '../models/grupotabela.js';
import ItemTabela from '../models/itemtabela.js';

//////////    LISTAR REGISTROS DO USUARIO        //////////
export const getTabelaController = async (req, res) => {
  if(res.locals.usuario) {
    try {
      // Buscando lista de items
      const objUsuario = res.locals.usuario;
      const { items } = await GrupoTabela.findById(objUsuario.grupoTabela._id).populate(['items']);
      
      return res.send({ items });

    } catch (error) {
      res.send("Não foi possível receber dados")
    }
  }

  return res.send("Usuário não encontrado");
};


//////////        CRIAR NOVA ENTRADA           //////////
export const postTabelaController = async (req, res) => {
  if(res.locals.usuario) {
    const objUsuario = res.locals.usuario;
    try {
      const tabela = await GrupoTabela.findById(objUsuario.grupoTabela._id);

      try {
        // Encontrando a tabela do usuário
        const idTabela = tabela._id;

        // Criando o item novo com o req.body
        const novoItemTabela = await ItemTabela.create({ ...req.body, grupoTabela: idTabela});
        await tabela.items.push(novoItemTabela);
        await tabela.save();
        res.send({ tabela });

      } catch (error) {
        res.send("Erro ao criar novo item de registro");
      }

    } catch (error) {
      return res.send("Erro ao acessar tabela");
    }

    
    return res.send({ usuarioReq: objUsuario, body: req.body });
  }
};




//////////        DELETAR ITEM           //////////
export const deleteTabelaController = async (req, res) => {
  if(res.locals.usuario) {
    const objUsuario = res.locals.usuario;
    try {
      const item = await ItemTabela.findById(req.body.id);

      try {
        if( item.grupoTabela.toString() === objUsuario.grupoTabela.toString() ){
          await item.delete(req.body.id);
          res.status(200).send("ok");
        }
      } catch (error) {
        res.status(500);
      }

    } catch (error) {
      return res.send("Erro ao encontrar item");
    }
  } else {
    res.status(500).send("Usuário não encontrado");
  }
};


//////////        EDITAR ITEM            //////////
