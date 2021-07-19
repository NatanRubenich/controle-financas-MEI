import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Express
const app = express();
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());



app.use('/', router.get('/', (req, res) => {
  res.send('Funcionando')
})); 

app.listen(5000, () => console.log('Server rodando na porta', 5000))