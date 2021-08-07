import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo incompleto")
});

