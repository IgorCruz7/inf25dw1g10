import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET todas as aulas
router.get('/', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT a.id_aula, a.disciplina, p.nome AS professor
    FROM Aulas a
    JOIN Professores p ON a.id_professor = p.id_professor
  `);
  res.json(rows);
});

// GET aula por id
router.get('/:id', async (req, res) => {
  const [rows] = await pool.query(`
    SELECT a.id_aula, a.disciplina, p.nome AS professor
    FROM Aulas a
    JOIN Professores p ON a.id_professor = p.id_professor
    WHERE a.id_aula = ?
  `, [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({ msg: 'Aula não encontrada' });
  }
  res.json(rows[0]);
});

// POST nova aula
router.post('/', async (req, res) => {
  const { disciplina, id_professor } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Aulas (disciplina, id_professor) VALUES (?, ?)',
    [disciplina, id_professor]
  );
  res.json({ id: result.insertId, disciplina, id_professor });
});

// PUT atualizar aula
router.put('/:id', async (req, res) => {
  const { disciplina, id_professor } = req.body;
  await pool.query(
    'UPDATE Aulas SET disciplina=?, id_professor=? WHERE id_aula = ?',
    [disciplina, id_professor, req.params.id]
  );
  res.json({ msg: 'Aula atualizada com sucesso' });
});

// DELETE remover aula
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Aulas WHERE id_aula = ?', [req.params.id]);
  res.json({ msg: 'Aula removida com sucesso' });
});

export default router;

