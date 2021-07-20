import jwt from 'jsonwebtoken';

export const loginJWT = (idUsuario) => {
  jwt.sign({ userId: idUsuario }, process.env.SECRET_JWT, {
    expiresIn: 86400
  });
}

export const verificarJWT = (idUsuario) => {
  jwt.verify({ userId: idUsuario }, process.env.SECRET_JWT);
}