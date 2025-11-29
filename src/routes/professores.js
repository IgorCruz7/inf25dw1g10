import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET todos os professores
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Professores');
  res.json(rows);
});

// GET professor por id
router.get('/:id', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Professores WHERE id_professor = ?', [req.params.id]);
  res.json(rows[0]);
});

// POST novo professor
router.post('/', async (req, res) => {
  const { nome, email, departamento } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Professores (nome, email, departamento) VALUES (?, ?, ?)',
    [nome, email, departamento]
  );
  res.json({ id: result.insertId, nome, email, departamento });
});

// PUT atualizar professor
router.put('/:id', async (req, res) => {
  const { nome, email, departamento } = req.body;
  await pool.query(
    'UPDATE Professores SET nome=?, email=?, departamento=? WHERE id_professor = ?',
    [nome, email, departamento, req.params.id]
  );
  res.json({ msg: 'Professor atualizado com sucesso' });
});

// DELETE remover professor
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Professores WHERE id_professor = ?', [req.params.id]);
  res.json({ msg: 'Professor removido com sucesso' });
});

export default router;
