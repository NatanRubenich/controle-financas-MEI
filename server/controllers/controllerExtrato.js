import Usuario from '../models/usuario.js';
import GrupoTabela from '../models/grupotabela.js';
import ItemTabela from '../models/itemtabela.js';


///////////            DASHBOARD           ///////////////

export const getExtratosDisponiveis = async (req, res) => {
  if(res.locals.usuario) {
    try {
      // Buscando lista de items
      const objUsuario = res.locals.usuario;

      try {
        // Entradas
        const entradas = await ItemTabela.find({
          grupoTabela: objUsuario.grupoTabela._id,
          }, 
          'dataVenda'
        )
        .sort('-dataVenda');

        // Array de meses
        const mesesDisponiveis = [];

        // Mapeando meses
        entradas.map((e) => {
          const data = new Date(e.dataVenda.getFullYear(), e.dataVenda.getMonth(), 1).toLocaleDateString('pt-BR');
          if (mesesDisponiveis.includes(data)) {
            return;
          }
          mesesDisponiveis.push(data);
        });

        return res.send({ mesesDisponiveis });
        
      } catch (error) {
        return res.status(500).send({ error })
      }

    } catch (error) {
      res.status(500).send("Não foi possível receber dados dos meses")
    }
  }

  return res.send("Usuário não encontrado");
};