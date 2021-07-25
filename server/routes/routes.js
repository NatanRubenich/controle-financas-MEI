import express from 'express';
import { 
  cadastroController, 
  loginController
} from '../controllers/controllerAuth.js';

import { 
  getTabelaController,
  postTabelaController,
  deleteTabelaController,
  editarTabelaController
} from '../controllers/controllerTabela.js';

import { authMiddleware } from '../middlewares/middlewares.js';

const router = express.Router();


////////////////////////////
/////     AUTH      ////////

// Rotas de cadastro
router.post('/cadastro/enviar', async (req, res) => {
  cadastroController(req, res);
});

// Login
router.post('/login/enviar', async (req, res) => {
  loginController(req, res);
});


////////////////////////////
/////     CRUD      ////////
// Listando registros
router.get('/registros', async (req, res, next) => {
  authMiddleware(req, res, next);
});

router.get('/registros', async (req, res) => {
  getTabelaController(req, res);
});

// Criando registro
router.post('/registros/novo/enviar', async (req, res, next) => {
  authMiddleware(req, res, next);
});

router.post('/registros/novo/enviar', async (req, res) => {
  postTabelaController(req, res);
});


// Removendo registro
router.delete('/registros/deletar', async (req, res, next) => {
  authMiddleware(req, res, next);
});

router.delete('/registros/deletar', async (req, res) => {
  deleteTabelaController(req, res);
});

// Editando registro
router.put('/registros/editar/enviar', async (req, res, next) => {
  authMiddleware(req, res, next);
});

router.put('/registros/editar/enviar', async (req, res) => {
  editarTabelaController(req, res);
});









export default router;