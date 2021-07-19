import express from 'express';

import { homeController } from '../controllers/crud.js';


const router = express.Router();

const Home = router.get('/', (req, res) => {
  homeController(req, res);
});

export default router;