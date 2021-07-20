import express from 'express';
import { homeController } from '../controllers/controllers.js';
import { registroController, loginController } from '../controllers/controllerAuth.js';


const router = express.Router();

// Homepage
router.get('/', (req, res) => {
  homeController(req, res);
});

// Rotas de registro
router.post('/registro/enviar', async (req, res) => {
  registroController(req, res);
});

// Login
router.post('/login/enviar', async (req, res) => {
  loginController(req, res);
});

export default router;