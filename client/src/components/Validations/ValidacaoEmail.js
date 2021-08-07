import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo incompleto")
});

export const codigoSchema = yup.object().shape({
  codigo: yup
    .string()
    .required("Campo incompleto"),

  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo incompleto"),

  senha: yup
    .string()
    .required("Campo incompleto")
    .min(6, "Senha muito curta")
    .max(40),

  senhaConf: yup
    .string()
    .required("Campo incompleto")
    .oneOf([yup.ref('senha'), null], 'Senhas não correspondem')
});
