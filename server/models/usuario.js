import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true
  }, 
  sobrenome: {
    type: String,
    require: true
  },
  nomeEmpresa: {
    type: String,
    require: true
  },
  cnpj: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  telefone: {
    type: Number,
    require: true
  },
  senha: {
    type: String,
    require: true,
    select: false
  }
}, {
  timestamps: true
});

UsuarioSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);