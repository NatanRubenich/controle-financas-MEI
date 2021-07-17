import * as yup from 'yup';

export const usuarioSchema = yup.object().shape({
  nome: yup.string().required(),
  sobrenome: yup.string().required(),
  nomeEmpresa: yup.string().required(),
  cnpj: yup.number().required().min(14).max(14),
  email: yup.string().email().required(),
  telefone: yup.number().min(10).required(),
  senha: yup.string().min(6).max(40).required(),
  senhaConf: yup.string().min(6).max(40).required(),
});
