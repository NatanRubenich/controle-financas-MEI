import * as yup from 'yup';

export const usuarioSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Campo incompleto"),

  sobrenome: yup
    .string()
    .required("Campo incompleto"),

  nomeEmpresa: yup
    .string()
    .required("Campo incompleto"),

  cnpj: yup
    .string()
    .required("Campo incompleto")
    .matches(/^[0-9]{14}$/, "Insira um CNPJ de 14 números"),

  email: yup
    .string()
    .email()
    .required("Campo incompleto"),

  telefone: yup
    .string()
    .required("Campo incompleto")
    .matches(/^[0-9]{10,}$/, "Adicione o DDD"),

  senha: yup
    .string()
    .min(6, "Senha muito curta")
    .max(40)
    .required("Campo incompleto"),

  senhaConf: yup
    .string()
    .required("Campo incompleto")
    .oneOf([yup.ref('senha'), null], 'Passwords must match')

})

