import { Router } from "express";  
import { pool } from "../db.js";

const router = Router();

router.get("/", async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM Alunos");
    res.json(rows);
});

router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM Alunos WHERE id_aluno = ?',
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ msg: 'Aluno não encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ msg: 'Erro no servidor', error: err.message });
  }
});


router.post('/', async (req, res) => {
  const { nome, email, curso } = req.body;
  const [result] = await pool.query(
    'INSERT INTO Alunos (nome, email, curso) VALUES (?, ?, ?)',
    [nome, email, curso]
  );
  res.json({ id: result.insertId, nome, email, curso });
});


router.put('/:id', async (req, res) => {
  const { nome, email, curso } = req.body;
  await pool.query(
    'UPDATE Alunos SET nome=?, email=?, curso=? WHERE id_aluno = ?',
    [nome, email, curso, req.params.id]
  );
  res.json({ msg: 'Aluno atualizado com sucesso' });
});


router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Alunos WHERE id_aluno = ?', [req.params.id]);
  res.json({ msg: 'Aluno removido com sucesso' });
});

export default router;