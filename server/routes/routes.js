import express from 'express';
import { homeController } from '../controllers/controllers.js';
import { registroController } from '../controllers/controllerAuth.js';


const router = express.Router();

// Homepage
router.get('/', (req, res) => {
  homeController(req, res);
});




// Rotas de registro
router.post('/registro/enviar', async (req, res) => {
  registroController(req, res);
});

export default router;