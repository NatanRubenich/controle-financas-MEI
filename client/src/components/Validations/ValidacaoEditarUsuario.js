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

  cidade: yup
    .string()
    .required("Campo incompleto"),

  cnpj: yup
    .string()
    .required("Campo incompleto")
    .test('tamanho-cnpj', function (value) {
      const valorNovo = value.replace(/\D/g,'');
      return valorNovo.length === 14;
    }),

  cpf: yup
  .string()
  .required("Campo incompleto")
  .test('tamanho-cpf', function (value) {
    const valorNovo = value.replace(/\D/g,'');
    return valorNovo.length === 11;
  }),
  
  telefone: yup
    .string()
    .required("Campo incompleto")
    .test('tamanho-telefone', function (value) {
      const valorNovo = value.replace(/\D/g,'');
      return valorNovo.length >= 10;
    })
});

