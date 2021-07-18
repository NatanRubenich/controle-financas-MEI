import * as yup from 'yup';

export const addRegistroSchema = yup.object().shape({
  nomeCliente: yup
    .string()
    .required("Campo incompleto"),

  tipoVenda: yup
    .string()
    .required("Escolha um tipo de venda"),

  dataVenda: yup
    .date()
    .required("Campo incompleto"),

  descricao: yup
    .string()
    .required("Campo incompleto"),

  quantidade: yup
    .number()
    .min(1)
    .required("Campo incompleto"),

  valorUnitario: yup
    .number()
    .min(1)
    .required("Campo incompleto"),

  desconto: yup
    .number()
    .required("Campo incompleto"),

  notaFiscal: yup
    .string()
    .required("Campo incompleto")

})

