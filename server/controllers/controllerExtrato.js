import Usuario from '../models/usuario.js';
import GrupoTabela from '../models/grupotabela.js';
import ItemTabela from '../models/itemtabela.js';


///////////            DASHBOARD           ///////////////

export const getExtratosDisponiveis = async (req, res) => {
  if(res.locals.usuario) {
    try {
      // Buscando lista de items
      const objUsuario = res.locals.usuario;

      // Datas
      const data = new Date();
      const diaInicialMes = new Date(data.getFullYear(), data.getMonth(), 1);
      const diaFinalMes  = new Date(data.getFullYear(), data.getMonth() + 1, 0);
      const anoAtualInicio = new Date(data.getFullYear(), 0, 1);
      const anoAtualFinal = new Date(data.getFullYear() + 1, 0, 1);
      
      try {

        // Entradas
        const entradas = await ItemTabela.find({
          grupoTabela: objUsuario.grupoTabela._id,
        }
        , 'dataVenda'
        );

        // Array de meses
        const arrayMeses = [];

        // Mapeando meses
        entradas.map((e) => {
          const data = new Date(e.dataVenda);
          const mes = data.getMonth() + 1;
          const ano = data.getFullYear();
          arrayMeses.push({ mes, ano });
        });

        const mesesDisponiveis = 
          arrayMeses.filter((v, i, a) => a.findIndex(t => (t.mes === v.mes && t.ano === v.ano )) === i );

        
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