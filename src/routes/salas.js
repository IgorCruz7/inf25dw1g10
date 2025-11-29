import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET todas as salas
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Salas');
  res.json(rows);
});

// GET sala por id
router.get('/:id', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Salas WHERE id_sala = ?', [req.params.id]);
  res.json(rows[0]);
});

// POST nova sala
router.post('/', async (req, res) => {
  const { nome, capacidade } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Salas (nome, capacidade) VALUES (?, ?)',
    [nome, capacidade]
  );
  res.json({ id: result.insertId, nome, capacidade });
});

// PUT atualizar sala
router.put('/:id', async (req, res) => {
  const { nome, capacidade } = req.body;
  await pool.query(
    'UPDATE Salas SET nome=?, capacidade=? WHERE id_sala = ?',
    [nome, capacidade, req.params.id]
  );
  res.json({ msg: 'Sala atualizada com sucesso' });
});

// DELETE remover sala
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Salas WHERE id_sala = ?', [req.params.id]);
  res.json({ msg: 'Sala removida com sucesso' });
});

export default router;

