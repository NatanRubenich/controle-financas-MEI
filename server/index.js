import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Home from './routes/crud.js';

// ENV
const dotenvResultado = dotenv.config();
if (dotenvResultado.error) {
  throw dotenvResultado.error;
}

// Express
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());


app.use('/', Home); 

app.listen(process.env.ROTA, () => console.log('Server rodando na porta', process.env.ROTA))