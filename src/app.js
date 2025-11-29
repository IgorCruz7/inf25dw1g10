
import express from 'express';
import { pool } from './db.js';
// importa os routers
import alunosRouter from './routes/alunos.js';
import professoresRouter from './routes/professores.js';
import salasRouter from './routes/salas.js';
import horariosRouter from './routes/horarios.js';
import aulasRouter from './routes/aulas.js';


const app = express();
app.use(express.json());

// usa os routers
app.use('/alunos', alunosRouter);
app.use('/professores', professoresRouter);
app.use('/salas', salasRouter);
app.use('/horarios', horariosRouter);
app.use('/aulas', aulasRouter);

app.get('/', (req, res) => {
  res.json({ ok: true, msg: 'API de Horários Escolares está online!' });
});

app.get('/ping', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    res.json({ ok: true, resultado: rows[0].resultado });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Servidor a correr na porta ${port}`));

