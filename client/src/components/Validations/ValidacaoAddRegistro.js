import * as yup from 'yup';

export const addRegistroSchema = yup.object().shape({
  nomeCliente: yup
    .string()
    .required("Campo incompleto"),

  tipoVenda: yup
    .string()
    .required("Campo incompleto"),

  dataVenda: yup
    .string()
    .required("Campo incompleto"),

  descricao: yup
    .string()
    .required("Campo incompleto")
    .test('tamanho-cnpj', function (value) {
      const valorNovo = value.replace(/\D/g,'');
      return valorNovo.length === 14;
    }),

  quantidade: yup
    .string()
    .email()
    .required("Campo incompleto"),

  valorUnitario: yup
    .string()
    .required("Campo incompleto")
    .test('tamanho-telefone', function (value) {
      const valorNovo = value.replace(/\D/g,'');
      return valorNovo.length >= 10;
    }),

  formaPagamento: yup
    .string()
    .required("Campo incompleto")
    .min(6, "Senha muito curta")
    .max(40),

  desconto: yup
    .string()
    .required("Campo incompleto")
    .oneOf([yup.ref('senha'), null], 'Senhas não correspondem'),

  notaFiscal: yup
    .string()
    .required("Campo incompleto")
    .oneOf([yup.ref('senha'), null], 'Senhas não correspondem')

})

